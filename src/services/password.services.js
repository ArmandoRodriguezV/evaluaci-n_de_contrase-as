import { calculate_entropy } from '../utils/entropy.js';
import { isCommonPassword } from '../utils/dictionary.js';

export function check_password_strength(password) {
    const entropy = calculate_entropy(password);
    let strength = "";

    if (entropy < 60) {
        strength = "Débil o Aceptable (crackeable en horas/días)";
    } else if ((entropy < 80) && (entropy >= 60)) {
        strength = "Fuerte";
    } else {
        strength = "Muy Fuerte (Estándar de seguridad moderna)";
    }

    if (isCommonPassword(password)) {
        strength = isCommonPassword(password);
    }

    const attempts = Math.pow(2, entropy);
    const seconds = attempts / 1e11;
    const crackTime = formatTime(seconds);

    return { entropy, strength, crackTime };
}

export function formatTime(seconds) {
    if (seconds < 60) return `${seconds.toFixed(2)} segundos`;
    if (seconds < 3600) return `${(seconds / 60).toFixed(2)} minutos`;
    if (seconds < 86400) return `${(seconds / 3600).toFixed(2)} horas`;
    if (seconds < 31536000) return `${(seconds / 86400).toFixed(2)} días`;
    return `${(seconds / 31536000).toFixed(2)} años`;
}
