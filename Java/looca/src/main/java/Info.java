import com.github.britooo.looca.api.core.Looca;
import java.net.InetAddress;
import java.net.UnknownHostException;

// link para pegar hostname da maquina:
//https://www.devmedia.com.br/como-detectar-o-endereco-ip-e-o-nome-da-maquina-do-host-sem-usar-socket/3100#:~:text=Veja%20nesta%20dica%20como%20obter%20informa%C3%A7%C3%B5es%20do%20host.&text=A%20classe%20java.,o%20endere%C3%A7o%20da%20m%C3%A1quina%20local.

public class Info {

    Looca looca = new Looca();
    Sistema sistema = new Sistema();
    Totem totem = new Totem(4,"Consolação");

    public void getInfo(){ 
        String hostname = "";
           try {
            hostname = InetAddress.getLocalHost().getHostName();
      } catch (UnknownHostException e) {
            e.printStackTrace();
      }
  

        sistema.setLinhas("-", 70);
        System.out.println("\t\t\t SISTEMA OPERACIONAL\n");
        System.out.println("Sistema Operacional:\t\t| "+looca.getSistema().getSistemaOperacional());
        System.out.println("Hostname:\t\t\t| "+hostname);
        System.out.println("Fabricante:\t\t\t| "+looca.getSistema().getFabricante());
        System.out.println("Arquitetura:\t\t\t| "+looca.getSistema().getArquitetura());
        System.out.println("Inicializado em:\t\t| "+looca.getSistema().getInicializado());
        System.out.println("Permissões:\t\t\t| "+looca.getSistema().getPermissao());

        sistema.setLinhas("-", 70);
        System.out.println("\t\t\t PROCESSADOR\n");
        System.out.println("Marca:\t\t\t\t| "+looca.getProcessador().getNome());
        System.out.println("Fabricante:\t\t\t| "+looca.getProcessador().getFabricante());
        System.out.println("Micro arquitetura:\t\t| "+looca.getProcessador().getMicroarquitetura());
        System.out.println("CPUs Físicas:\t\t\t| "+looca.getProcessador().getNumeroCpusFisicas());
        System.out.println("CPUs Lógicas:\t\t\t| "+looca.getProcessador().getNumeroCpusLogicas());
        System.out.println("Pacotes Físicos:\t\t| "+looca.getProcessador().getNumeroPacotesFisicos());
        System.out.println("Frequência:\t\t\t| "+looca.getProcessador().getFrequencia());

        sistema.setLinhas("-", 70);
        System.out.println("\t\t\t Memória\n");
        System.out.println("Memória Total:\t\t\t| "+looca.getMemoria().getTotal());
        System.out.println("Memória Disponível:\t\t| "+looca.getMemoria().getDisponivel());
        System.out.println("Memória em Uso:\t\t\t| "+looca.getMemoria().getEmUso());

        sistema.setLinhas("-", 70);
        System.out.println("\t\t\t Discos\n");
        System.out.println("Quantidade de Discos:\t\t| "+looca.getGrupoDeDiscos().getQuantidadeDeDiscos());
        System.out.println("Quantidade de Volumes:\t\t| "+looca.getGrupoDeDiscos().getQuantidadeDeVolumes());
        System.out.println("Tamanho total em Disco:\t\t| "+looca.getGrupoDeDiscos().getTamanhoTotal());




        

    }

    
}
