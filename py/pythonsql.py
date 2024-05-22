import mysql.connector
from mysql.connector import Error

try:
    # Definindo os dados de conexão
    conexao = mysql.connector.connect(
        host='127.0.0.1',  # Ou o endereço do servidor MySQL
        port=3306,  # Porta do servidor MySQL
        user='root',  # Usuário do banco de dados
        password='Chihiro002.',  # Senha do banco de dados
        database='DADOS'  # Nome do banco de dados
    )
    if conexao.is_connected():
        print("Conexão Bem Sucedida")
        info_server = conexao.get_server_info()
        print(f"Info do Servidor: {info_server}")

except Error as e:
    print(f"Erro ao conectar: {e}")

finally:
    if conexao.is_connected():
        conexao.close()
        print("Conexão Encerrada")