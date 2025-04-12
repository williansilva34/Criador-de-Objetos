

class Carro{

    constructor(nome,idade){
  
      this.nome = nome;
  
      this.idade = idade;
  
    }
  
  setnome(nome){
  
  this.nome =nome
  
  }    
    getNome(){
  
      return this.nome;
  
    }
  
    getTipo(){
  
      return this.idade;
    }
  
    getinfo(){
  
      return [this.nome,this.idade]
  
    }
  
  
  
  
  
  }
  
  const add= document.getElementById("add");
  
  const res = document.querySelector(".res");
  
  
  let pessoas = [];
  
  const addPerson=(el)=>{
  res.innerHTML = ""
    pessoas.map((el)=>{
  
      const div = document.createElement("div")
  
      div.innerHTML = `Nome : ${el.getNome()} <br/> Idade : ${el.getTipo()}`
  
  
      res.appendChild(div)
  
    })
  
  }
  
  add.addEventListener("click",(evt)=>{
  
    const tl = new Carro(document.querySelector("#f_nome").value,document.querySelector("#f_idade").value)
  
    pessoas.push(tl)
  
  
  addPerson()
   
  
    console.log(pessoas)
  
  })