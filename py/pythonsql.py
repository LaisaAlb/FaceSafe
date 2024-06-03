from flask import Flask, request, render_template
from mysql.connector import Error
import mysql.connector

app = Flask(__name__, template_folder='templates')

def insert_user(name, email, cpf, rg, telefone):
    try:
        # Definindo os dados de conexão
        conexao = mysql.connector.connect(
            host='127.0.0.1',  # O endereço do servidor MySQL
            port=3306,  # Porta do servidor MySQL
            user='root',  # Usuário do banco de dados
            password='Chihiro002.',  # Senha do banco de dados
            database='DADOS'  # Nome do banco de dados
        )
        if conexao.is_connected():
            print("Conexão Bem Sucedida")
            info_server = conexao.get_server_info()
            print(f"Info do Servidor: {info_server}")

            cursor = conexao.cursor()

            # Query SQL para inserir dados
            sql_insert_query = """INSERT INTO CADVISIT (nome, email, cpf, rg, telefone)
                                  VALUES (%s, %s, %s, %s, %s)"""
            record_tuple = (name, email, cpf, rg, telefone)

            # Executando a query
            cursor.execute(sql_insert_query, record_tuple)

            # Confirmando a inserção
            conexao.commit()
            print("Registro inserido com sucesso")

    except mysql.connector.Error as e:
        print(f"Erro ao inserir dados no MySQL: {e}")

    finally:
        if 'conexao' in locals() and conexao.is_connected():
            cursor.close()
            conexao.close()
            print("Conexão Encerrada")

@app.route('/')
def index():
    return render_template('dados.html')

@app.route('/insert_dados', methods=['POST'])
def handle_insert():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        cpf = request.form['cpf']
        rg = request.form['rg']
        telefone = request.form['tel']
        insert_user(nome, email, cpf, rg, telefone)
        return 'Dados inseridos com sucesso no banco de dados.'
    else:
        return 'Método não permitido.'

if __name__ == '__main__':
    app.run(debug=True)
