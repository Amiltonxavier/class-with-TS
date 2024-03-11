import { Contapf } from "./class/ContaPF";
import { ContaPJ } from "./class/ContaPJ";
  
  
  
  const pessoaF = new Contapf("pf",290, "hello worlds");

  const pessoaPJ = new ContaPJ("pj", 1206, "JOSE ");
  
//A class conta é abstrata então não é possível criar um instancia da class
  //const conta = new Conta(230, "google")
  
  console.log(pessoaF.numeroConta);
  console.log(pessoaPJ)
