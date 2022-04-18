public class Sistema {
    

    public void setLinhas(String tipo, Integer quantidade){

        System.out.println(String.format(
            "%s",tipo.repeat(quantidade)
        ));
    }


}
