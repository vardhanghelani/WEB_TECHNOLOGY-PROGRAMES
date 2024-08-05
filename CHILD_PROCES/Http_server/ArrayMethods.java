import java.util.*;
public class ArrayMethods{
    public static void main(String[] args){
    int top=-1;
    Scanner sc= new Scanner(System.in);
    System.out.println("Enter the size of the array: ");
    int size=sc.nextInt();
    int[] arr=new int[size];
ArrayMethods a1= new ArrayMethods();    
while(true){
System.out.println("Enter 1 to insert");
System.out.println("Enter 2 to delete");
System.out.println("Enter 3 to display");
System.out.println("Enter 4 to peep");
System.out.println("Enter 5 to change");
System.out.println("Enter 6 to exit");
System.out.println("Enter your choice: ");
int choice=sc.nextInt();
switch(choice){
    case 1:
        System.out.println("Enter the element to be inserted: ");
        int data=sc.nextInt();
        a1.push(data);
        break;
        case 2:
            a1.pop(arr);
            break;
            case 3:
                a1.display(arr);
                break;
                case 4:
                    a1.peek(arr);

}    
    public void push(int data){
        if(top==size-1){
            System.out.println("Stack Overflow");
            }
            else{
                top=top+1;
                arr[top]=data;
                }


    }
    public void pop(int arr){
        if(top==-1){
            System.out.println("Stack Underflow");
            }
            else{
                top=top-1;
                }
                }
                public void display(){
                    for(int i=0;i<=top;i++){
                        System.out.println(arr[i]);
                        }
                        }
                        public void peek(int arr){
                            System.out.println(arr[top]);
                            }
                            public void peep(int pos){
                                if(top-pos+1==0){
                                    System.out.println("Stack Underflow");
                                }
                                else{
                                    System.out.println(arr[top-i+1])
                                }
                                }
                                public void change(int pos,int data,int arr){
                                    if(top-pos+1==0){
                                        System.out.println("Stack Underflow");
                                        }
                                        else{
                                            arr[top-i+1]=data;
                                            }
                                            }

                                }

    
    }
}