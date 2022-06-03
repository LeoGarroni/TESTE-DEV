import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './styles.module.scss';
import { api } from '../../services/api';
import { useEffect } from 'react';

interface IResult {
  nome: string,
  email:string,
  tel: string,
  endereco: string,
  profissao: string
}

export default function Form() {

  useEffect(() => {
    api.get('Users')
    .then(response => console.log(response.result))
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const result: IResult = {
      nome: data.get('nome').toString(),
      email: data.get('email').toString(),
      tel: data.get('telefone').toString(),
      endereco: data.get('endereco').toString(),
      profissao: data.get('profissao').toString()
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="nome"
                  name="nome"
                  label="Nome"
                  autoComplete="nome"
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
                    id="telefone"
                    name="telefone"
                    label="Telefone"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="endereco"
                    name="endereco"
                    label="Endereço Completo"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="profissao"
                    name="profissao"
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
          </Box>
        </Box>
      </Container>
  );
}