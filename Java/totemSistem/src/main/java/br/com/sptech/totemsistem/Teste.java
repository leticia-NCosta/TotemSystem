/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.sptech.totemsistem;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.sql.SQLException;


/**
 *
 * @author Vericoders
 */
public class Teste {

    public static void main(String[] args) throws SQLException{

        BancoDeDados banco = new BancoDeDados();
        SalvarDados salvar = new SalvarDados();
       
        
        //System.out.println(banco.getFkEstacao());
        salvar.salvarDadosVariaveis();
    }
}
