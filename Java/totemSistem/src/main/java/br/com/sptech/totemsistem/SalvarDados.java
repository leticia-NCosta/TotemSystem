package br.com.sptech.totemsistem;

import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import com.github.britooo.looca.api.core.Looca;

public class SalvarDados {

    Connection config = new Connection();
    Looca looca = new Looca();
    JdbcTemplate template = new JdbcTemplate(config.getDataSource());

    public void salvarDadosEstaticos(){

        String nomeTabela = "tb_totem";
        String sistemaOperacional = looca.getSistema().getSistemaOperacional();

        String inserirDado = String.format("INSERT INTO %s"
        + "(sistemaOperacional) VALUES"
        + "('%s')",nomeTabela,sistemaOperacional);

        template.execute(inserirDado);

    }

    public void salvarDadosVariaveis(){

        String nomeTabela = "tb_totem";
        String sistemaOperacional = looca.getSistema().getSistemaOperacional();

        String inserirDado = String.format("INSERT INTO %s"
                + "(sistemaOperacional) VALUES"
                + "('%s')",nomeTabela,sistemaOperacional);

        template.execute(inserirDado);

    }

}


