package stepDefinitions;

public class TextContext {

    public DataContext dataContext;
    public TextContext(){
        dataContext = new DataContext();
    }

    public DataContext getDataContext(){
        return dataContext;
    }
}
