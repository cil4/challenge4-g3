const login = async (email, password) => {
    const resposta = await fetch(`https://challenge4.onrender.com/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        }),
    });
    if (resposta.ok) {
        return resposta.body;
    }
    throw new Error("ERROR, email o contraseña inválido");
  };

  export const loginService = {
    login
  }