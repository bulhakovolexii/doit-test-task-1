"use client";

import { useAddPostMutation } from "@/lib/postsApi";
import { Save, Title } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  InputAdornment,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const steps = ["Заголовок", "Тіло", "Попередній перегляд"];

export default function CreatePost() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const [addPost, { isLoading }] = useAddPostMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });

  useEffect(() => {
    if (activeStep === 2) {
      setIsDialogOpen(true);
    }
  }, [activeStep]);

  const handleNext = handleSubmit(async (data) => {
    if (activeStep === steps.length - 1) {
      try {
        await addPost({ ...data, userId: 1 }).unwrap();
        router.replace("/posts?created=true");
      } catch (error) {
        console.error("Failed to add post:", error);
      }
    } else if (activeStep === 2) {
      setIsDialogOpen(true);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  });

  const handleBack = () => {
    if (activeStep === 0) return;
    setActiveStep((prev) => prev - 1);
  };

  const handleEdit = (step: number) => {
    setIsDialogOpen(false);
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600 }}>
      <Paper sx={{ p: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <TextField
            fullWidth
            label="Заголовок"
            {...register("title", { required: "Заголовок обовʼязковий" })}
            error={!!errors.title}
            helperText={errors.title?.message || " "}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Title />
                </InputAdornment>
              ),
            }}
          />
        )}

        {activeStep === 1 && (
          <TextField
            fullWidth
            multiline
            minRows={4}
            label="Тіло"
            {...register("body", { required: "Тіло обовʼязкове" })}
            error={!!errors.body}
            helperText={errors.body?.message || " "}
          />
        )}

        <Box display="flex" justifyContent="space-between" mt={4}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Назад
          </Button>
          <Button variant="contained" onClick={handleNext} endIcon={<Save />}>
            {activeStep === steps.length - 1 ? "Зберегти" : "Далі"}
          </Button>
        </Box>
      </Paper>
      {/* === Preview Dialog === */}
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Попередній перегляд</DialogTitle>
        <Divider />
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            {getValues("title")}
          </Typography>
          <Typography variant="body1">{getValues("body")}</Typography>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={() => handleEdit(0)}>Редагувати</Button>
          <Button
            onClick={handleNext}
            disabled={isLoading}
            startIcon={isLoading && <CircularProgress size={20} />}
            variant="contained"
          >
            Підтвердити
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
