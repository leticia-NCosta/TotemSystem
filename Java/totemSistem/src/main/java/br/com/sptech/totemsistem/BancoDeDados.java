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

    // LOCAL
    String url = "jdbc:mysql://127.0.0.1:3306/totemsystem";
    String login = "root";
    String senha = "root";

    // AZURE
    //String url = "jdbc:sqlserver://svr-totem-system.database.windows.net:1433;database=bd-totem-system;user=admin-totem-system@svr-totem-system;password={2ads#grupo9};encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30";
    //String login = "admin-totem-system";
    //String senha = "2ads#grupo9";
    
    public Integer getFkEstacao() throws SQLException {

        Connection conexão = DriverManager.getConnection(url, login, senha);
        
        Integer fk = 0;
        
        String hostname = "";
            try {
                hostname = InetAddress.getLocalHost().getHostName();
            } catch (UnknownHostException e) {
                e.printStackTrace();
            }

        PreparedStatement pesquisa = conexão.prepareStatement(String.format("select fk_estacao from tb_totem where hostname = '%s' limit 1",hostname));
        ResultSet resultado = pesquisa.executeQuery();

        while (resultado.next()) {
            try{
                fk = Integer.valueOf(resultado.getString("fk_estacao"));
            } catch(Exception e){
                System.out.println("FK está null");
                
            }
            
        }
        
        
            return fk;

        
        

    }

}
