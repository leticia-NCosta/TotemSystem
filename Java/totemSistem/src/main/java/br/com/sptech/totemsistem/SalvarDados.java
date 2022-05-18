package br.com.sptech.totemsistem;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.jdbc.core.JdbcTemplate;
import com.github.britooo.looca.api.core.Looca;

public class SalvarDados {

    Connection config = new Connection();
    Looca looca = new Looca();
    
    JdbcTemplate template = new JdbcTemplate(config.getDataSource());
    DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("yy/MM/dd HH:mm:ss");

    public void salvarDadosEstaticos() {

        Totem totem = new Totem();
        
        

        

            String hostname = "";
            try {
                hostname = InetAddress.getLocalHost().getHostName();
            } catch (UnknownHostException e) {
                e.printStackTrace();
            }

            
            
            String nomeTabela = "tb_totem";

            String dataAtual = dtf2.format(LocalDateTime.now());

            String inserirDado = String.format("UPDATE %s SET "
                    + "sistema_operacional = '%s',"
                    + "fabricante_sistema = '%s',"
                    + "arquitetura = %d,"
                    + "inicializado_em = '%s',"
                    + "permissoes = '%s',"
                    + "marca_processador = '%s',"
                    + "fabricante_processador = '%s',"
                    + "micro_arquitetura = '%s',"
                    + "cpus_fisicas = %d,"
                    + "cpus_logicas = %d,"
                    + "pacotes_fisicos = %d,"
                    + "frequencia = %d,"
                    + "data_atual = '%s' "
                    + "where hostname = '%s'",
                    nomeTabela,
                    totem.getSistemaOperacional(),
                    totem.getFabricanteSistema(),
                    totem.getArquitetura(),
                    totem.getInicializadoEm(),
                    totem.getPermissoes(),
                    totem.getMarca(),
                    totem.getFabricanteProcessador(),
                    totem.getMicroArquitetura(),
                    totem.getCpusFisicas(),
                    totem.getCpusLogicas(),
                    totem.getPacotesFisicos(),
                    totem.getFrequencia(),
                    dataAtual,
                    totem.getHostname());
                    

            template.execute(inserirDado);

    }

    public void salvarDadosVariaveis() {
        
        

            Totem totem = new Totem();
            String dataAtual = dtf2.format(LocalDateTime.now());
            System.out.println("Inserindo... " + dataAtual);


            String inserirDado = String.format("INSERT INTO tb_log"
                    + "(fk_hostname,"
                    + "data_atual,"
                    + "memoria_uso,"
                    + "memoria_disponivel,"
                    + "total_processos,"
                    + "total_threads,"
                    + "total_servicos,"
                    + "total_servicos_ativos,"
                    + "total_servicos_inativos,"
                    + "volume_total,"
                    + "volume_disponivel,"
                    + "volume_em_uso) "
                    + "VALUES "
                    + "('%s','%s',%d,%d,%d,%d,%d,%d,%d,%d,%d,%d)",
                    totem.getHostname(),
                    dataAtual,
                    totem.getMemoriaEmUso(),
                    totem.getMemoriaDisponivel(),
                    totem.getTotalProcessos(),
                    totem.getTotalThreads(),
                    totem.getTotalDeServicos(),
                    totem.getTotalServicosAtivos(),
                    totem.getTotalServicosInativos(),
                    totem.getVolumeTotal(),
                    totem.getVolumeDisponivel(),
                    totem.getVolumeEmUso());

            template.execute(inserirDado);
            
            
        

    }

}
