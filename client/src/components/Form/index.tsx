import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './styles.module.scss';

interface IResult {
  firstName: string,
  lastName: string,
  email:string,
  tel: string,
  address: string,
  profession: string
}

export default function Form() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const result: IResult = {
      firstName: data.get('firstName').toString(),
      lastName: data.get('lastName').toString(),
      email: data.get('email').toString(),
      tel: data.get('telephone').toString(),
      address: data.get('address').toString(),
      profession: data.get('profession').toString()
    }
    console.log(result);
  };

  return (
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h1>
            Novo Cadastro
          </h1>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Sobrenome"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id="telephone"
                    name="telephone"
                    label="Telefone"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Endereço Completo"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="profession"
                    name="profession"
                    label="Profissão"
                  />
              </Grid>


              <Grid item xs={6} height={70}>
                <Button
                  type="reset"
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 3, height: "100%" }}
                >
                  Limpar
                </Button>
              </Grid>

              <Grid item xs={6} height={70}>
                <Button
                  className={styles.sendButton}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mb: 3, height: "100%" }}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}