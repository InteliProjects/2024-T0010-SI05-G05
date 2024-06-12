import pandas as pd
from conn import Data
from difflib import get_close_matches

class MeanPriceCalculator:
    def __init__(self, manager):
        self.manager = manager    

    def searchSimilarItens(self, string_to_be_matched):
        target_string = string_to_be_matched.split(' ')

        transactions = self.getTransactions()
        df = pd.DataFrame(transactions)
        new_column_names = ['id_product', 'name', 'average']
        if len(df.columns) < 1:
            return None
        df.columns = new_column_names
        values = []

        for row in df.values:
            name_split = row[1].split(' ')
            words = []
            for target_word in target_string:
                words = words + get_close_matches(target_word, name_split, cutoff=0.6)

            if len(words) >= 1:
                similarity = len(words)/len(target_string)

                if similarity >= 0.66:
                    new_filtered = {
                        'id': row[0],
                        'name': row[1],
                        'average': row[2],
                        'similarity': similarity
                    }
                    values.append(new_filtered)
    
        values.sort(key=lambda x: x['similarity'], reverse=True)
        return values
        
    def getTransactions(self):
        data = Data()
        return data.sql("SELECT * FROM PRODUCTS")
    
    def calculateAllMeanPrices(self, id=""):
        transactions = self.getTransactions()
        df = pd.DataFrame(transactions)
        new_column_names = ['id_product', 'name', 'average']
        if len(df.columns) < 1:
            return None
        df.columns = new_column_names
        filtered_df = df
        if (id == ""):
            filtered_df = df[df['productId'] == id]
        if filtered_df.empty:
            return None
        group = filtered_df.groupby('productId')['unitPrice'].mean()
        return group