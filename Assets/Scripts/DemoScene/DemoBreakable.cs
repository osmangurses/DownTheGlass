using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DemoBreakable : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject gameManager, particle, particle2;
    public AudioSource sfxAudio;
    public int particleCounter;



    void Start()
    {
        sfxAudio = GameObject.Find("BreakSfx").GetComponent<AudioSource>();
        gameManager = GameObject.Find("GameManager");
        particle = GameObject.Find("Main Camera").transform.GetChild(0).gameObject;
        particle2 = GameObject.Find("Main Camera").transform.GetChild(1).gameObject;

    }

    // Update is called once per frame
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Player" && collision.GetComponent<Rigidbody2D>().velocity.y <= -3)
        {
            GameObject.Find("Main Camera").transform.DOShakePosition(0.3f, 0.2f);
            


            sfxAudio.Play();
            
            Destroy(gameObject.transform.parent.gameObject);
            GameObject.Find("Main Camera").transform.DOMoveY(GameObject.Find("Main Camera").transform.position.y - 3.5f, 0.4f);
            //GameObject.Find("Walls").transform.DOMoveY(GameObject.Find("Walls").transform.position.y - 3.5f, 0.4f);
            collision.GetComponent<Rigidbody2D>().velocity = Vector2.zero;
            GameObject.Find("Player").GetComponent<DemoPlayerMovement>().isGrounded = GameObject.Find("Player").GetComponent<DemoPlayerMovement>().jumpCount;
            if (particleCounter <= 0)
            {
                particle.GetComponent<ParticleSystem>().Play();
            }
            else
            {
                particle2.GetComponent<ParticleSystem>().Play();
                particleCounter--;
            }



        }
    }

}
