import com.github.britooo.looca.api.core.Looca;
import com.github.britooo.looca.api.util.Conversor;

public class Teste {

    public static void main(String[] args) {

        Looca looca = new Looca();
        Info info = new Info();
        Totem totem = new Totem();
        Conversor conversor = new Conversor();

        //System.out.println(looca.getMemoria().getTotal());
        
        
        //System.out.println(looca.getGrupoDeServicos().getServicosAtivos());

        
        totem.processos();
        
        //info.getInfo();
    }

    

    
}
