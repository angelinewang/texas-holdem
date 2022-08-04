//#1 Variables 
let robotLocation = [me.getX(), me.getY()]
let keyLocation = [9, map.getWidth() - 2]

let emptyCells2 = []; 
     emptyCells2 = map.getAdjacentEmptyCells(robotLocation)
    let emptyCells2Final = emptyCells2.every(function(element) {
    element[1] == 'up'})
           
let emptyCells = [];
emptyCells = map.getAdjacentEmptyCells(robotLocation);
           
let rightCells = emptyCells.filter(function(element)
           {element[1] === 'right'})
           
rightCells.sort(function (a,b) {
           	return a[0] - b[0]})
         let rightDown = false;

rightCells.forEach(function(element) {


let existingRight = map.getAdjacentEmptyCells(element);

if (existingRight.find(function(element) {
          
element[1] == 'down'
            
            }
            
            )) {
            
            rightDown = true;
            
            }
            

    
          
          })
          
  let leftCells = [];
          
           leftCells = emptyCells.filter(function(element) {
           element[1] === 'left'}
           )
           
    		leftCells.sort(function (a,b) {
            return b[0] - a[0]
            //Sorted in descending order
            });
            
             let leftDown = false;
           
         
           leftCells.forEach(function(element) {
          
          let existingLeft = map.getAdjacentEmptyCells(element);
          
          

        if (existingLeft.find(function(element) {
          
            element[1] == 'down'
            
            }
            
            )) 
            
            {
            
            leftDown = true;
            
            }
          
    
          
          
   })
          
      //End of Variables 
          
          
      if (
      !me.canMove('down') 
      && 
      
      me.canMove('right') 
     
      && 
      (rightDown == true
                   
      
      		|| 
            
      (keyLocation[1] == robotLocation[1]
      
      && 
      
      rightCells
      
      
      )
      
      
      
      ) 
      
      
      
      
      
      )
      
      
      
      {
      	me.move('right')
      }
     
    
 	else if (
	me.canMove('down') && !emptyCells2Final
  
    )
    
    {
    	me.move('down')
    }
    
    else if (
    
    me.canMove('left')
    
    &&
    
    !me.canMove('down')
    
    && 
    
leftDown
     )
     
    {
    	me.move('left')
    }
    

	else 
    {
    	me.move('up')
    }
          
//Next Steps: 1. Test that moving right works 2. Test moving down 3. Test moving left 4. Test moving up