import { check_password_strength } from '../services/password.services.js';

export function evaluatePassword(req, res) {
  const { password } = req.body;
  try {

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'Contraseña inválida o no proporcionada' });
    }

    const result = check_password_strength(password);
    res.json({
      result
    });
  } catch (e) {
    res.status(500).json({ error: `Error de servidor ${e}` })
  }
}
