import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const commonPasswords = new Set();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(function loadDictionary() {
    try {
        const filePath = path.join(__dirname, '../data/passwords.csv');
        const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
        for (let line of lines) {
            if (!line) continue;
            const parts = line.split(',');
            const pwd = parts[0]?.trim();
            if (pwd) commonPasswords.add(pwd.toLowerCase());
        }
        console.log(`Diccionario cargado con ${commonPasswords.size} contraseñas.`);
    } catch (err) {
        console.error('No se pudo cargar el diccionario:', err.message);
    }
})();

export function isCommonPassword(password) {
    if (commonPasswords.has(password)) {
        return 'Insegura (Contraseña común)';
    }
    for (const commonPwd of commonPasswords) {
        if (commonPwd.includes(password)) {
            return 'Insegura (Contraseña común parcial)';
        }
    }
    return null;
}
