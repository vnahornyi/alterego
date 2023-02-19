import { useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "@^/hooks";
import { loginUser } from "@^/store/actions/auth";
import { ICredentials } from "@^/store/types";
import { clearError } from "@^/store/reducers/auth";
import { PROFILE } from "@^/constants/routes";

const LoginForm: React.FC = () => {
  const { t } = useTranslation("translation");
  const error = useAppSelector((state) => state.auth.error);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ICredentials>();

  useEffect(() => {
    if (error) {
      setError("username", {});
      setError("password", { message: error });
      return;
    }

    clearErrors();

    return () => {
      dispatch(clearError());
    };
  }, [error]);

  const onSubmit = async (data: ICredentials) => {
    const response = await dispatch(loginUser(data)).unwrap();

    if (response.username) {
      window.location.href = PROFILE;
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        component="h1"
        mb={5}
      >
        {t('login-h')}
      </Typography>
      <Box display="flex" flexDirection="column" gap={3}>
        <TextField
          label={t('login-field')}
          variant="outlined"
          inputProps={{
            ...register("username", {
              required: "This field is required for input",
              maxLength: 20,
            }),
          }}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          label={t('password-field')}
          variant="outlined"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          inputProps={{
            ...register("password", {
              required: "This field is required for input",
            }),
          }}
        />
        <Button fullWidth type="submit" variant="contained">
          {t('login-btn')}
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
