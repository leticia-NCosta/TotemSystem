package br.com.sptech.totemsistem;

//criação de .TXT
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

//pegar Hostname
import java.net.InetAddress;
import java.net.UnknownHostException;

//data
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import java.io.FileReader;
import java.io.BufferedReader;

// @author JP
public class LogTxt {

    public static void main(String[] args) throws IOException {

        DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("dd-MM-yy_HH-mm-ss");
        DateTimeFormatter dtf3 = DateTimeFormatter.ofPattern("dd/MM/yy HH-mm-ss");

        String arquivo = "Log.txt";

        //enquanto houver mais linhas
        try {
            FileReader file = new FileReader("/home/aluno/Desktop/" + arquivo);
            BufferedReader reader = new BufferedReader(file);
            reader.ready();
            reader.close();
            file.close();
            System.out.println("Existe");

            //Arquivo existe
        } catch (Exception e0) {

            // Não existe
            System.out.println("Nao existe");

            String hostname = "";
            try {
                hostname = InetAddress.getLocalHost().getHostName();
            } catch (UnknownHostException e1) {
                e1.printStackTrace();
            }

            // String arquivo = String.format("Log-%s.txt", dtf2.format(LocalDateTime.now()));
            FileWriter arq = new FileWriter("/home/aluno/Desktop/" + arquivo); // Nessa linha escolhemos a rota onde o arquivo ira ser salvado
            PrintWriter gravarArq = new PrintWriter(arq);

            gravarArq.printf(("\nUsuário: " + hostname));
            gravarArq.printf(("\nData e Hora: " + dtf3.format(LocalDateTime.now())));

            gravarArq.println("\n \n \n ERRO DE LOGIN");

            arq.close();

            System.out.println("LOG .txt GERADO EM: /home/aluno/Desktop/");

        }

    }
}
