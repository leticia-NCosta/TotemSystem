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

        String hostname = "";
        try {
            hostname = InetAddress.getLocalHost().getHostName();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }

        String nomeTabela = "tb_totem";

        String dataAtual = dtf2.format(LocalDateTime.now());
        String sistemaOperacional = looca.getSistema().getSistemaOperacional();
        String FabricanteSistema = looca.getSistema().getFabricante();
        Integer Arquitetura = looca.getSistema().getArquitetura();
        String InicializadoEm = String.valueOf(looca.getSistema().getInicializado());
        String Permissões = String.valueOf(looca.getSistema().getPermissao());
//        
        String Marca = looca.getProcessador().getNome();
        String FabricanteProcessador = looca.getProcessador().getFabricante();
        String MicroArquitetura =looca.getProcessador().getMicroarquitetura();
        Integer CPUsFisicas =looca.getProcessador().getNumeroCpusFisicas();
        Integer CPUsLogicas = looca.getProcessador().getNumeroCpusLogicas();
        Integer PacotesFisicos = looca.getProcessador().getNumeroPacotesFisicos();
        Long Frequencia =looca.getProcessador().getFrequencia();

        String inserirDado = String.format("INSERT INTO %s"
                + "(dataAtual,sistemaOperacional,hostname,fabricanteSistema,arquitetura,inicializadoEm,permissoes,"
                + "marca,fabricanteProcessador, microArquitetura,cpusFisicas,cpusLogicas,pacotesFisicos,frequencia) VALUES"
                + "('%s','%s','%s','%s',%d,'%s','%s','%s','%s','%s',%d,%d,%d,%d)",nomeTabela,
                dataAtual, sistemaOperacional,hostname,FabricanteSistema,Arquitetura,InicializadoEm,
                Permissões,Marca,FabricanteProcessador,MicroArquitetura,CPUsFisicas,CPUsLogicas,
                PacotesFisicos,Frequencia);

        template.execute(inserirDado);

    }

    public void salvarDadosVariaveis() {

        String nomeTabela = "tb_log";
        Long memoriaEmUso = looca.getMemoria().getEmUso();
        Long memoriaDisponivel = looca.getMemoria().getDisponivel();
        Integer totalProcessos = looca.getGrupoDeProcessos().getTotalProcessos();
        Integer totalThreads = looca.getGrupoDeProcessos().getTotalThreads();
        Integer totalDeServicos = looca.getGrupoDeServicos().getTotalDeServicos();
        //Double temperatura = looca.getTemperatura().getTemperatura();

        String inserirDado = String.format("INSERT INTO %s"
                + "(memoriaEmUso,memoriaDisponivel,totalProcessos,totalThreads,totalDeServicos) VALUES"
                + "(%d,%d,%d,%d,%d)", nomeTabela, memoriaEmUso,memoriaDisponivel,
                totalProcessos,totalThreads,totalDeServicos);

        template.execute(inserirDado);




    }

}
