using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WallScript : MonoBehaviour
{
    // Start is called before the first frame update
   public GameObject friendWall;
    public float cameraY;
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        cameraY= GameObject.Find("Main Camera").transform.position.y;
        if (gameObject.transform.position.y<(1+cameraY) && gameObject.transform.position.y >(cameraY-1))
        {
            friendWall.transform.position =gameObject.transform.position- new Vector3(0, 12.54f, 0);
        }
    }
}
