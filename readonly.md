## readonly
TS doesnt complain about Changing const values in array or object. complains iff original ref value is changes 
eg : 
arr = [1,2,3]
arr= [4,5,6] = > complain
arr[1]=6 => no complain

