Tetris.round = function(value, decimals)
{
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals)
}

Tetris.get_random_int = function(min, max, exclude=undefined)
{
    let num = Math.floor(Math.random() * (max - min + 1) + min)

    if(exclude !== undefined)
    {
        if(num === exclude)
        {
            if(num + 1 <= max)
            {
                num = num + 1
            }

            else if(num - 1 >= min)
            {
                num = num - 1
            }
        }
    }

    return num
}

Tetris.get_random_int = function(min, max, exclude=undefined)
{
    let num = Math.floor(Tetris.random() * (max - min + 1) + min)

    if(exclude !== undefined)
    {
        if(num === exclude)
        {
            if(num + 1 <= max)
            {
                num = num + 1
            }

            else if(num - 1 >= min)
            {
                num = num - 1
            }
        }
    }

    return num
}

Tetris.get_padding = function(element)
{
    const padding = {}

    padding.left = parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-left'))
    padding.right = parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-right'))
    padding.top = parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-top'))
    padding.bottom = parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-bottom'))

    return padding
}

Tetris.rotate_piece_object = function(obj, mode)
{
    if(mode === 0)
    {
        return obj
    }

    let new_obj = {}
    let values = [obj.left, obj.right, obj.top, obj.bottom]

    for(let i=0; i<mode; i++)
    {
        new_obj.top = values[0]
        new_obj.bottom = values[1]
        new_obj.right = values[2]
        new_obj.left = values[3]

        values = [new_obj.left, new_obj.right, new_obj.top, new_obj.bottom]
    }

    return new_obj
}

Tetris.get_exposed_nodes = function(piece_container, nodes)
{
    let exposed = []

    for(let i=0; i<nodes.length; i++)
    {
        let x = nodes[i][0]
        let y = nodes[i][1]

        let add = true

        for(let i2=0; i2<nodes.length; i2++)
        {
            if(i === i2)
            {
                continue
            }

            let x2 = nodes[i2][0]
            let y2 = nodes[i2][1]

            if(x === x2)
            {
                if(y > y2)
                {
                    add = false
                    break
                }
            }
        }

        if(add)
        {
            exposed.push(nodes[i])
        }
    }

    return exposed
}

const async_timeout = (cb, timeout = 0) => new Promise(resolve => 
{
    setTimeout(() => 
    {
        cb()
        resolve()
    }, timeout)
})