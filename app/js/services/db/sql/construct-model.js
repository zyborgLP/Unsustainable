exports.query = function () {
    return "\
        CREATE TABLE IF NOT EXISTS Element (\
            Id INTEGER PRIMARY KEY,\
            Name TEXT NOT NULL,\
            Description TEXT NOT NULL,\
            Image TEXT NOT NULL\
        );\
        \
        CREATE TABLE IF NOT EXISTS Recipe (\
            Id INTEGER PRIMARY KEY,\
            Element1Id INTEGER NOT NULL,\
            Element2Id INTEGER NOT NULL,\
            ResultId INTEGER NOT NULL,\
            EnergyUsage INTEGER NOT NULL,\
            CONSTRAINT fk_Recipe_Element\
                FOREIGN KEY (Element1Id)\
                REFERENCES Element (Id)\
            CONSTRAINT fk_Recipe_Element1\
                FOREIGN KEY (Element2Id)\
                REFERENCES Element (Id)\
            CONSTRAINT fk_Recipe_Element2\
                FOREIGN KEY (ResultId)\
                REFERENCES Element (Id)\
        );\
        \
        CREATE TABLE IF NOT EXISTS Achievement (\
            Id INTEGER PRIMARY KEY,\
            Name TEXT NOT NULL,\
            Description TEXT NOT NULL,\
            Image TEXT NOT NULL,\
            Query TEXT NOT NULL\
        );\
        \
        CREATE TABLE IF NOT EXISTS Player (\
            Id INTEGER PRIMARY KEY,\
            CurrentEnergy INTEGER NOT NULL\
        );\
        \
        CREATE TABLE IF NOT EXISTS CurrentElement (\
            Id INTEGER PRIMARY KEY,\
            PlayerId INTEGER NOT NULL,\
            ElementId INTEGER NOT NULL,\
            Location TEXT NOT NULL,\
            CONSTRAINT fk_CurrentElement_Player1\
                FOREIGN KEY (PlayerId)\
                REFERENCES Player (Id),\
            CONSTRAINT fk_CurrentElement_Element1\
                FOREIGN KEY (ElementId)\
                REFERENCES Element (Id)\
        );\
        \
        CREATE TABLE IF NOT EXISTS UnlockedAchievement (\
            Id INTEGER PRIMARY KEY,\
            PlayerId INTEGER NOT NULL,\
            AchievementId INTEGER NOT NULL,\
            CONSTRAINT fk_UnlockedAchievement_Player1\
                FOREIGN KEY (PlayerId)\
                REFERENCES Player (Id),\
            CONSTRAINT fk_UnlockedAchievement_Achievement1\
                FOREIGN KEY (AchievementId)\
                REFERENCES Achievement (Id)\
        );\
        \
        CREATE TABLE IF NOT EXISTS UnlockedRecipe (\
            Id INTEGER PRIMARY KEY,\
            PlayerId INTEGER NOT NULL,\
            RecipeId INTEGER NOT NULL,\
            CONSTRAINT fk_UnlockedRecipe_Player1\
                FOREIGN KEY (PlayerId)\
                REFERENCES Player (Id),\
            CONSTRAINT fk_UnlockedRecipe_Recipe1\
                FOREIGN KEY (RecipeId)\
                REFERENCES Recipe (Id)\
        );\
    ";
};