package br.com.sptech.totemsistem;

import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

public class ValidacaoLogin {

    Connection config = new Connection();
    JdbcTemplate template = new JdbcTemplate(config.getDataSource());

    public Boolean validarLogin(String email, String senha) {
        Boolean resposta = false;
        List<Usuario> listarUsuario;
        listarUsuario = template.query("select * from Usuario where email = ? and  senha = ?",
                new BeanPropertyRowMapper<>(Usuario.class), email, senha);
        
        
        if(!listarUsuario.isEmpty()){
            resposta = true;
        }
        
        return resposta;
    }

}
