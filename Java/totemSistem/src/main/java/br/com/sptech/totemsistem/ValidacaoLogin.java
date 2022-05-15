package br.com.sptech.totemsistem;

import java.util.List;
import java.util.Map;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

public class ValidacaoLogin {

    Connection config = new Connection();
    JdbcTemplate template = new JdbcTemplate(config.getDataSource());
    JdbcTemplate template1 = new Connection().createConnection();

    public Boolean validarLogin(String email, String senha) {
        Boolean resposta = false;
        List<Usuario> listarUsuario;
        listarUsuario = template.query("select * from tb_usuario where email = ? and  senha = ?",
                new BeanPropertyRowMapper<>(Usuario.class), email, senha);

        if (!listarUsuario.isEmpty()) {
            resposta = true;
        }

        return resposta;
    }

    public Boolean existeHostname() {
        
        Boolean resposta = false;
        
        Totem totem = new Totem();
        List<Totem> queryTotem;
        queryTotem = template.query("select hostname from tb_totem where hostname = ? limit 1",
                new BeanPropertyRowMapper<>(Totem.class), totem.getHostname());

        if (!queryTotem.isEmpty()) {
            resposta = true;
        }

        return resposta;

    }
    
 
}
