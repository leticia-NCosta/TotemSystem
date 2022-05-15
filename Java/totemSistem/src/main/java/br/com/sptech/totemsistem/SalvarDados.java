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
    Totem totem = new Totem();
    JdbcTemplate template = new JdbcTemplate(config.getDataSource());
    DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("yy/MM/dd HH:mm:ss");

    public void salvarDadosEstaticos() {

        ValidacaoLogin validacao = new ValidacaoLogin();
        

        if (validacao.existeHostname()) {

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

        } else {

            System.out.println("ERRO! Totem não cadastrado!");

        }
    }

    public void salvarDadosVariaveis() {

        //String nomeTabela = "tb_log";
        Long memoriaEmUso = looca.getMemoria().getEmUso();
        Long memoriaDisponivel = looca.getMemoria().getDisponivel();
        Integer totalProcessos = looca.getGrupoDeProcessos().getTotalProcessos();
        Integer totalThreads = looca.getGrupoDeProcessos().getTotalThreads();
        Integer totalDeServicos = looca.getGrupoDeServicos().getTotalDeServicos();
        String dataAtual = dtf2.format(LocalDateTime.now());
        System.out.println("Inserindo... " + dataAtual);
        Double temperatura = looca.getTemperatura().getTemperatura();

        String inserirDado = String.format("INSERT INTO tb_log"
                + "(data_atual,memoria_uso,memoria_disponivel,total_processos,total_threads,total_servicos) VALUES"
                + "('%s',%d,%d,%d,%d,%d)", dataAtual, memoriaEmUso, memoriaDisponivel,
                totalProcessos, totalThreads, totalDeServicos);

        template.execute(inserirDado);

    }

}
