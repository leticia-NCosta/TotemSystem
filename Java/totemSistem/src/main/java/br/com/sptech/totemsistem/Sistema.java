package br.com.sptech.totemsistem;


public class Sistema {
    

    //Info info = new Info();

    public void setLinhas(String tipo, Integer quantidade){

        System.out.println(String.format(
            "%s",tipo.repeat(quantidade)
        ));
    }



}
