using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class JumpSubber : MonoBehaviour
{
    // Start is called before the first frame update
    public AudioSource sfxAudio;
 
  
    private void Start()
    {
        sfxAudio = GameObject.Find("BadCollectSfx").GetComponent<AudioSource>();
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Player")
        {
            GameObject.Find("Player").GetComponent<PlayerMovement>().jumpCount--;
           // GameObject.Find("Player").GetComponent<PlayerMovement>().isGrounded--;
            gameObject.transform.DOScale(new Vector2(5, 5), 0.2f);
            Color color = Color.white;
            color.a = 0;
            gameObject.GetComponent<SpriteRenderer>().DOColor(color, 0.2f);
            Destroy(gameObject, 0.2f);
            sfxAudio.Play();

        }


    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
