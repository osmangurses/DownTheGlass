using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class PlayerMovement : MonoBehaviour
{
    // Start is called before the first frame update
    public int yon;
    public float speed,jumpForce,rotationSpeed;
    public Rigidbody2D rb;
    public int isGrounded;
    public GameObject gameManager,fire;
    public int jumpCount,powerCounter;
    public AudioSource sfxAudio;
    bool firstTouched;
    
    void Start()
    {
        sfxAudio = GetComponent<AudioSource>();
        powerCounter = 0;
        yon = 1;
        rb=GetComponent<Rigidbody2D>();
        jumpCount= 2;
        sfxAudio.volume = sfxAudio.volume / 1.5f;
    }
    public void FirstTouch()
    {
        firstTouched = true;
        rb.velocity = new Vector2(rb.velocity.x, 0);
        rb.AddForce(new Vector2(0, jumpForce));
        isGrounded--;
        sfxAudio.Play();
    }
    
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag=="SideWallLeft") {
            yon = -1;
        }
        else if (collision.gameObject.tag == "SideWallRight")
        {
            yon = 1;
        }
        else
        {
            isGrounded = jumpCount;
            powerCounter= 0;
        }
    }
    // Update is called once per frame
    void Update()
    {
        rb.velocity +=Vector2.left * speed * yon * Time.deltaTime * (gameManager.GetComponent<GameManager>().groundCount + 80) / 80;
        gameObject.transform.Rotate(new Vector3(0, 0, rb.velocity.x)*Time.deltaTime*-rotationSpeed);
        if (Input.GetMouseButtonDown(0) && isGrounded!=0 && firstTouched)
        {
            rb.velocity = new Vector2(rb.velocity.x, 0);
            rb.AddForce(Vector2.up*jumpForce);
            isGrounded--;
            sfxAudio.Play();
            
        }
    }
}
