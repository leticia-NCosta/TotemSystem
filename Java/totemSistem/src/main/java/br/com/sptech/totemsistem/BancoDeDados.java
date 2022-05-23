package br.com.sptech.totemsistem;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author TotemSystem
 */
public class BancoDeDados {

    public String getURL(String local) {

        String url = "Local inválido";

        if (local.equals("mysql")) {
            //return url = "jdbc:mysql://127.0.0.1:3306/totemsystem";
            return url = "jdbc:mysql://mysql-totem:3306/totemsystem";
        } else if (local.equals("azure")) {
            return url = "jdbc:sqlserver://svr-totem-system.database.windows.net:1433;database=bd-totem-system;user=admin-totem-system@svr-totem-system;password={2ads#grupo9};encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30";
        } else {
            return url;
        }
    }

    public String getLogin(String local) {

        String login = "Local inválido";

        if (local.equals("mysql")) {
            return login = "root";
        } else if (local.equals("azure")) {
            return login = "admin-totem-system";
        } else {
            return login;
        }
    }

    public String getSenha(String local) {

        String senha = "Local inválido";

        if (local.equals("mysql")) {
            return senha = "root";
        } else if (local.equals("azure")) {
            return senha = "2ads#grupo9";
        } else {
            return senha;
        }
    }

    public Integer getIdEstacao(String nomeEstacao, String local) throws SQLException {

        Connection conexão = DriverManager.getConnection(this.getURL(local), this.getLogin(local), this.getSenha(local));

        Integer id = 0;

        PreparedStatement pesquisa = conexão.prepareStatement(String.format("select id_estacao from tb_estacao where nome_estacao = '%s' LIMIT 1", nomeEstacao));
        ResultSet resultado = pesquisa.executeQuery();

        while (resultado.next()) {
            try {
                id = Integer.valueOf(resultado.getString("id_estacao"));
            } catch (Exception e) {
                System.out.println("ID está null");

            }

        }

        return id;

    }

    public Boolean existeEstacao(String nomeEstacao, String local) throws SQLException {

        Connection conexão = DriverManager.getConnection(this.getURL(local), this.getLogin(local), this.getSenha(local));

        PreparedStatement pesquisa = conexão.prepareStatement(String.format("select nome_estacao from tb_estacao where nome_estacao = '%s'", nomeEstacao));
        ResultSet resultado = pesquisa.executeQuery();

        if (resultado.next()) {
            return true;
        } else {
            return false;
        }

    }

    public Boolean validarLogin(String email, String senha, String local) throws SQLException {

        Connection conexão = DriverManager.getConnection(this.getURL(local), this.getLogin(local), this.getSenha(local));
        PreparedStatement pesquisa = conexão.prepareStatement(String.format("select * from tb_usuario where email = '%s' and  senha = '%s'", email, senha));
        ResultSet resultado = pesquisa.executeQuery();

        if (resultado.next()) {
            return true;
        } else {
            return false;
        }

    }

    public Boolean existeHostname(String local) throws SQLException {


        Totem totem = new Totem();

        Connection conexão = DriverManager.getConnection(this.getURL(local), this.getLogin(local), this.getSenha(local));
        PreparedStatement pesquisa = conexão.prepareStatement(String.format("select hostname from tb_totem where hostname = '%s' limit 1", totem.getHostname()));
        ResultSet resultado = pesquisa.executeQuery();

        if (resultado.next()) {
            return true;
        } else {
            return false;
        }
    }

}
