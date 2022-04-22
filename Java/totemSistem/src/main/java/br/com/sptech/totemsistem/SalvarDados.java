package br.com.sptech.totemsistem;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.jdbc.core.JdbcTemplate;
import com.github.britooo.looca.api.core.Looca;

public class SalvarDados {

    Connection config = new Connection();
    Looca looca = new Looca();
    JdbcTemplate template = new JdbcTemplate(config.getDataSource());

    public void salvarDadosEstaticos() {

        String hostname = "";
        try {
            hostname = InetAddress.getLocalHost().getHostName();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }

        String nomeTabela = "tb_totem";

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
                + "(sistemaOperacional,hostname,fabricanteSistema,arquitetura,inicializadoEm,permissoes,"
                + "marca,fabricanteProcessador, microArquitetura,cpusFisicas,cpusLogicas,pacotesFisicos,frequencia) VALUES"
                + "('%s','%s','%s',%d,'%s','%s','%s','%s','%s',%d,%d,%d,%d)",
                nomeTabela, sistemaOperacional,hostname,FabricanteSistema,Arquitetura,InicializadoEm,
                Permissões,Marca,FabricanteProcessador,MicroArquitetura,CPUsFisicas,CPUsLogicas,
                PacotesFisicos,Frequencia);

        template.execute(inserirDado);

    }

    public void salvarDadosVariaveis() {

        String nomeTabela = "tb_log";
        String sistemaOperacional = looca.getSistema().getSistemaOperacional();

        String inserirDado = String.format("INSERT INTO %s"
                + "(sistemaOperacional) VALUES"
                + "('%s')", nomeTabela, sistemaOperacional);

        template.execute(inserirDado);

    }

}
