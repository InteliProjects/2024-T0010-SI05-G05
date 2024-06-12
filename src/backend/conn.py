from fastapi import FastAPI
import psycopg2

connectionString = "user=postgres.hhfkpiysrffdfpknzyfv password=@Mitra2024SI host=aws-0-sa-east-1.pooler.supabase.com port=5432 dbname=postgres"

#Para utilizar o banco de dados, importe a classe data com "import conn"
#Após isso, se quiser realizar uma query no banco de dados utilize o método sql dessa classe, passando como parâmetro a query desejada, por exemplo:
# sql("SELECT * FROM tabela")

class Data:
    def __init__(self):
        self.connection = psycopg2.connect(connectionString)
        self.cursor = self.connection.cursor()

    #retornar o nome das tabelas
    def getTables(self):
        self.cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
        return self.cursor.fetchall()
    
    def sql(self, query):
        self.cursor.execute(query)
        return self.cursor.fetchall()

