package br.com.sptech.totemsistem;

import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import com.github.britooo.looca.api.core.Looca;

public class SalvarDados {

    Connection config = new Connection();
    Looca looca = new Looca();
    JdbcTemplate template = new JdbcTemplate(config.getDataSource());

    public void salvarDadosEstaticos() {

        String nomeTabela = "tb_totem";
        String sistemaOperacional = looca.getSistema().getSistemaOperacional();
    //    String Hostname = looca.getSistema().getHostname();
        String Fabricante = looca.getSistema().getFabricante();
        Integer Arquitetura = looca.getSistema().getArquitetura();
        Instant InicializadoEm = looca.getSistema().getInicializado();
        Double Permissões = looca.getSistema().getPermissao();
//        
        String Marca = looca.getProcessador().getNome();
        String Fabricante = looca.getProcessador().getFabricante();
        String MicroArquitetura =looca.getProcessador().getMicroarquitetura();
        String CPUsFisicas =looca.getProcessador().getNumeroCpusFisicas();
        String CPUsLogicas = looca.getProcessador().getNumeroCpusLogicas();
        String PacotesFisicos = looca.getProcessador().getNumeroPacotesFisicos();
        String Frequencia =looca.getProcessador().getFrequencia();

        String inserirDado = String.format("INSERT INTO %s"
                + "(sistemaOperacional,Hostname,Fabricante,Arquitetura,InicializadoEm,Permissões,"
                + "Marca,Fabricante, Micro arquitetura,CPUs Físicas,CPUs Lógicas,Pacotes Físicos,Frequência) VALUES"
                + "('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", nomeTabela, sistemaOperacional);

        template.execute(inserirDado);

    }

    public void salvarDadosVariaveis() {

        String nomeTabela = "tb_registro";
        String sistemaOperacional = looca.getSistema().getSistemaOperacional();

        String inserirDado = String.format("INSERT INTO %s"
                + "(sistemaOperacional) VALUES"
                + "('%s')", nomeTabela, sistemaOperacional);

        template.execute(inserirDado);

    }

}
