using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class DemoPlayerMovement : MonoBehaviour
{
    // Start is called before the first frame update
    public Text helper,finishtext;
    public int yon;
    public float speed, jumpForce, rotationSpeed,bptime;
    public Rigidbody2D rb;
    public int isGrounded;
    public GameObject gameManager, fire,demoTouch;
    public int jumpCount, powerCounter,touchtimerindex,helperTextIndex;
    public AudioSource sfxAudio;
    public bool touchable;
    public Vector2 veltemp,postemp;
    public float[] touchtimer;
    public string[] helperTexts;
    public GameObject g1, g2;

    void Start()
    {
        helperTextIndex= 0;
        touchtimerindex = 0;
        sfxAudio = GetComponent<AudioSource>();
        powerCounter = 0;
        yon = 1;
        rb = GetComponent<Rigidbody2D>();
        jumpCount = 2;
        sfxAudio.volume = sfxAudio.volume / 1.5f;
        touchable= false;
     veltemp= Vector2.zero;
        Invoke("ActiveTouchable", touchtimer[touchtimerindex]);
    }

    void FinishDemo()
    {
        if (finishtext.gameObject.activeInHierarchy)
        {
            PlayerPrefs.SetInt("DemoPlayed", 1);
            SceneManager.LoadScene(0);
        }
        else
        {
            finishtext.gameObject.SetActive(true);
            Invoke("FinishDemo", 1.5f);
        }

    }
    private void ActiveTouchable()
    {
        
        touchtimerindex++;
        if (touchtimerindex!=touchtimer.Length)
        {
            touchable = true;
            
        }
        else
        {
            Invoke("BlockPowered", bptime);
        }
        
    }
    private void BlockPowered()
    {
        g1.SetActive(false);
        g2.SetActive(true);
        Invoke("FinishDemo", 3f);
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "SideWallLeft")
        {
            yon = -1;
        }
        else if (collision.gameObject.tag == "SideWallRight")
        {
            yon = 1;
        }

        else
        {
            isGrounded = jumpCount;
            powerCounter = 0;
            // fire.SetActive(false);
        }
    }
    // Update is called once per frame
    void Update()
    {
        if (!touchable)
        {
            rb.velocity += Vector2.left * speed * yon * Time.deltaTime;
            gameObject.transform.Rotate(new Vector3(0, 0, rb.velocity.x) * Time.deltaTime * -rotationSpeed);
            demoTouch.SetActive(false);

        }
       
        
        if (Input.GetMouseButtonDown(0) && isGrounded != 0 && touchable)
        {
            rb.gravityScale= 1.5F;
            rb.velocity = new Vector2(veltemp.x, 0);
            rb.AddForce(new Vector2(0, jumpForce));
            isGrounded--;
            sfxAudio.Play();
            touchable= false;
            veltemp= Vector2.zero;
            Invoke("ActiveTouchable", touchtimer[touchtimerindex]);

        }
        if (touchable && veltemp.x== 0)
        {
            postemp=gameObject.transform.position;
            veltemp = rb.velocity;
            rb.velocity = Vector2.zero;
            rb.gravityScale = 0;
            demoTouch.SetActive(true);
            helper.text = helperTexts[helperTextIndex];
            helperTextIndex++;
        }
       /* if (touchable)
        {
            gameObject.transform.position = postemp;
        }*/
    }
}
