
package br.com.sptech.totemsistem;

public class Usuario {
   private Integer id;
   private String nome;
   private String email;
   private String senha;

    

    public Boolean validacaoCampo(String email, String senha){
       System.out.println(email + ""+ senha);
       if (email.contains("@") && email.contains(".com") && senha.length()>= 8){
           this.setEmail(email);
         
           this.setSenha(senha);
           System.out.println("Retorna True na validação do campo");
           return true;  
           
       }
       else{
           System.out.println("Retorna falso na validação do campo");
           return false;
       }
       
       
          
    }
    
    public Boolean validarCredenciais(String email, String senha){
       if (email.equals(this.getEmail()) && senha.equals(this.getSenha())){
           
           System.out.println("Retornou true na validação do banco");
           return true;
       }
       else {
           System.out.println("Retornou false na validação do banco");
           return false;
       }
        
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
   
   
   
}
