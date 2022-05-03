

public class App {

    public static void main(String[] args) {

        Contato c1 = new Contato("Don","829819839813",false);
        Contato c2 = new Contato("JP","829819839813",true);
        Contato c3 = new Contato("Leticia","829819839813",true);
        Contato c4 = new Contato("Hanna","829819839813",false);

        Grupo g1 = new Grupo("ADS");

        c4.setBloqueado(true);

        g1.adicionar(c2);

    }

}
