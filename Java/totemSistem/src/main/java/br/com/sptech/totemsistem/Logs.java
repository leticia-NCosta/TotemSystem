package br.com.sptech.totemsistem;

// @author joao.siqueira
import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class Logs {

    public void gerarLog(String texto) throws IOException {

        File arquivo = new File("Log.txt");

        String hostname = "";
        try {
            hostname = InetAddress.getLocalHost().getHostName();
        } catch (UnknownHostException existe) {
            existe.printStackTrace();
        }

        if (!arquivo.exists()) {
            arquivo.createNewFile();
        }

        DateTimeFormatter dtf3 = DateTimeFormatter.ofPattern("dd/MM/yy HH:mm:ss");
        List<String> lista = new ArrayList<>();

        // Adicionar a Lista (e no .txt)
        lista.add("Usuario: " + hostname
                + "\n"
                + "Data & Hora: " + dtf3.format(LocalDateTime.now())
                + "\n"
                + "Alteração: " + texto // Adicionar log (?)
                + "\n \n");

        Files.write(Paths.get(arquivo.getPath()), lista, StandardOpenOption.APPEND);
    }
}
