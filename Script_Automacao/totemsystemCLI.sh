#!/usr/bin/env bash

#-VARIAVEIS INFO-----------------------------------------------------#

NOME_PROGRAMA="$(basename $0 | cut -d. -f1)"
VERSAO="1.0"
AUTOR="Totem System"
CONTATO="https://github.com/leticiaNCosta18/TotemSystem"
DESCRICAO="Script para executar o .jar do projeto"
varEXE=$1 # Se não tiver parametros ela executa normal


#-VARIAVEIS PARAMETRO----------------------------------------------------#

varINFO="
Nome do Programa: $NOME_PROGRAMA
Autor: $AUTOR
Versão: $VERSAO
Descrição do Programa: $DESCRICAO
"
varHELP="
Instruções para Ajuda:
	-h ou --help: Abre a ajuda de comandos do usuário;
	-i ou --info: Informações sobre o programa;
"

#-TESTES--------------------------------------------------------------------------#



#-LOOP PARA RODAR MAIS PARAMETROS---------------------------------------------------#

while test -n "$1"; do

	case $1 in

		-i |  --info)  	echo "$varINFO" 											;;		
		-h |  --help)  	echo "$varHELP"												;;
		-d | --debug)	bash -x $0													;;
		 *) 	echo "\nComando inválido. Digite -h ou --help para ajuda\n"	;;

	esac
	shift

done
#-FUNÇÕES--------------------------------------------------------------------------#

instalar_pacotes(){

	echo "\n\n=================================================="
	echo "Instalando e verificando todos os pacotes..."
	echo "==================================================\n\n"
	sleep 1
	echo "\n\n=================================================="
	echo "Dando update nos arquivos..."
	echo "==================================================\n\n"
	sudo apt-get update && sudo apt-get upgrade -y
	echo "\n\n=================================================="
	echo "Verificando java..."
	echo "==================================================\n\n"
	[ ! -x $(which java) ] && sudo apt-get install openjdk-11-jdk -y
	echo "\n\n=================================================="
	echo "Instalando interface gráfica"
	echo "==================================================\n\n"
	sudo apt-get install xrdp lxde-core lxde tigervnc-standalone-server -y
	echo "\n\n=================================================="
	echo "Verificando git..."
	echo "==================================================\n\n"
	[ ! -x $(which git) ] && sudo apt-get install git-all
	echo "\n\n=================================================="
	echo "Verificando docker..."
	echo "==================================================\n\n"
	sudo apt install docker.io -y


}
criar_urubu100(){

	echo "\n\n=================================================="
	echo "Criando usuário urubu100.."
	echo "==================================================\n\n"
	sleep 1
	useradd -m -U urubu100
	echo "urubu100:urubu100" | chpasswd 
	echo "\n\n=================================================="
	echo "Dando permissão de sudo para urubu100..."
	echo "==================================================\n\n"
	usermod -aG sudo urubu100
	

}
clonar_github(){

	echo "\n\n=================================================="
	echo "Clonando github e criando pastas..."
	echo "==================================================\n\n"
	wget -O totemSitem.jar https://github.com/leticia-NCosta/TotemSystem/raw/main/Java/totemSistem/out/artifacts/totemSitem_jar/totemSitem.jar 
	echo "\n\n=================================================="
	echo "Criando uma pasta para o projeto..."
	echo "==================================================\n\n"
	mkdir totem && mv ./totemSitem.jar totem/totemsystem.jar && cd totem


}
instalar_docker(){

	echo "\n\n=================================================="
	echo "Permissões ao docker"
	echo "==================================================\n\n"
	sudo systemctl start docker
	sudo systemctl enable  docker
	echo "\n\n=================================================="
	echo "Fazendo o build do Dockerfile..."
	echo "==================================================\n\n"
	sudo docker-compose up -d
	echo "\n\n=================================================="
	echo "Rodando a imagem totemsystem no Docker.."
	echo "==================================================\n\n"
	sudo docker run -d --name totemsystem totemsystem

	
}

main(){

	criar_urubu100
	instalar_pacotes
	clonar_github
	baixar_scripts
	instalar_docker

}

baixar_scripts(){

	wget -O docker-compose.yml
	wget -O Dockerfile-java 
	wget -O Dockerfile-mysql https://raw.githubusercontent.com/leticia-NCosta/TotemSystem/main/Script_Automacao/Dockerfile-mysql
	wget -O sql.sql https://raw.githubusercontent.com/leticia-NCosta/TotemSystem/main/Script_Automacao/sql.sql

}

#-EXECUÇÃO-------------------------------------------------------------------------#

if [ -z "$varEXE" ]; then
	# Coloca o main do programa aqui
	main
	echo "\n\n=================================================="
	echo "Tudo pronto meu chefe.."
	echo "==================================================\n\n"
fi
