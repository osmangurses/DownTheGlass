using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DemoJumpPluser : MonoBehaviour
{
   
    public bool taken;
   


    private void Start()
    {
        
        taken = false;
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Player")
        {
            GameObject.Find("Player").GetComponent<DemoPlayerMovement>().jumpCount++;
           
            gameObject.transform.DOScale(new Vector2(5, 5), 0.2f);
            Color color = Color.white;
            color.a = 0;
            gameObject.GetComponent<SpriteRenderer>().DOColor(color, 0.2f);
            Destroy(gameObject, 0.2f);
           
        }


    }
    void Update()
    {

    }
}
