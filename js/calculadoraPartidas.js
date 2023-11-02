function calcularNivel(vitorias, derrotas) {
  if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
    return "Por favor, forneça valores numéricos positivos para vitórias e derrotas.";
  }

  const saldoVitorias = vitorias - derrotas;
  const niveis = {
    10: "Ferro",
    20: "Bronze",
    50: "Prata",
    80: "Ouro",
    90: "Diamante",
    100: "Lendário",
  };

  for (const limite in niveis) {
    if (vitorias <= limite) {
      return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${niveis[limite]}`;
    }
  }

  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de Imortal`;
}

const vitorias = 55;
const derrotas = 15;
const resultado = calcularNivel(vitorias, derrotas);
console.log(resultado);

/* segunda opção

function calcularNivel(vitorias, derrotas) {
  if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
    return "Por favor, forneça valores numéricos positivos para vitórias e derrotas.";
  }

  const saldoVitorias = vitorias - derrotas;

  let nivel;

  switch (true) {
    case vitorias <= 10:
      nivel = "Ferro";
      break;
    case vitorias <= 20:
      nivel = "Bronze";
      break;
    case vitorias <= 50:
      nivel = "Prata";
      break;
    case vitorias <= 80:
      nivel = "Ouro";
      break;
    case vitorias <= 90:
      nivel = "Diamante";
      break;
    case vitorias <= 100:
      nivel = "Lendário";
      break;
    default:
      nivel = "Imortal";
  }

  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

const vitorias = 55;
const derrotas = 15;
const resultado = calcularNivel(vitorias, derrotas);
console.log(resultado); 
*/

/* Terceira opção 

function calcularNivel(vitorias, derrotas) {
  if (typeof vitorias !== 'number' || typeof derrotas !== 'number' || vitorias < 0 || derrotas < 0) {
    return "Por favor, forneça valores numéricos positivos para vitórias e derrotas.";
  }

  const saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

const vitorias = 55;
const derrotas = 15;
const resultado = calcularNivel(vitorias, derrotas);
console.log(resultado); 
*/
