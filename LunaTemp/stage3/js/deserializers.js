var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2776 = root || request.c( 'UnityEngine.JointSpring' )
  var i2777 = data
  i2776.spring = i2777[0]
  i2776.damper = i2777[1]
  i2776.targetPosition = i2777[2]
  return i2776
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2778 = root || request.c( 'UnityEngine.JointMotor' )
  var i2779 = data
  i2778.m_TargetVelocity = i2779[0]
  i2778.m_Force = i2779[1]
  i2778.m_FreeSpin = i2779[2]
  return i2778
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2780 = root || request.c( 'UnityEngine.JointLimits' )
  var i2781 = data
  i2780.m_Min = i2781[0]
  i2780.m_Max = i2781[1]
  i2780.m_Bounciness = i2781[2]
  i2780.m_BounceMinVelocity = i2781[3]
  i2780.m_ContactDistance = i2781[4]
  i2780.minBounce = i2781[5]
  i2780.maxBounce = i2781[6]
  return i2780
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2782 = root || request.c( 'UnityEngine.JointDrive' )
  var i2783 = data
  i2782.m_PositionSpring = i2783[0]
  i2782.m_PositionDamper = i2783[1]
  i2782.m_MaximumForce = i2783[2]
  return i2782
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2784 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2785 = data
  i2784.m_Spring = i2785[0]
  i2784.m_Damper = i2785[1]
  return i2784
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2786 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2787 = data
  i2786.m_Limit = i2787[0]
  i2786.m_Bounciness = i2787[1]
  i2786.m_ContactDistance = i2787[2]
  return i2786
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2788 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2789 = data
  i2788.m_ExtremumSlip = i2789[0]
  i2788.m_ExtremumValue = i2789[1]
  i2788.m_AsymptoteSlip = i2789[2]
  i2788.m_AsymptoteValue = i2789[3]
  i2788.m_Stiffness = i2789[4]
  return i2788
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2790 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2791 = data
  i2790.m_LowerAngle = i2791[0]
  i2790.m_UpperAngle = i2791[1]
  return i2790
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2792 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2793 = data
  i2792.m_MotorSpeed = i2793[0]
  i2792.m_MaximumMotorTorque = i2793[1]
  return i2792
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2794 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2795 = data
  i2794.m_DampingRatio = i2795[0]
  i2794.m_Frequency = i2795[1]
  i2794.m_Angle = i2795[2]
  return i2794
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2796 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2797 = data
  i2796.m_LowerTranslation = i2797[0]
  i2796.m_UpperTranslation = i2797[1]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2798 = root || new pc.UnityMaterial()
  var i2799 = data
  i2798.name = i2799[0]
  request.r(i2799[1], i2799[2], 0, i2798, 'shader')
  i2798.renderQueue = i2799[3]
  i2798.enableInstancing = !!i2799[4]
  var i2801 = i2799[5]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2801[i + 0]) );
  }
  i2798.floatParameters = i2800
  var i2803 = i2799[6]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2803[i + 0]) );
  }
  i2798.colorParameters = i2802
  var i2805 = i2799[7]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2805[i + 0]) );
  }
  i2798.vectorParameters = i2804
  var i2807 = i2799[8]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2807[i + 0]) );
  }
  i2798.textureParameters = i2806
  var i2809 = i2799[9]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2809[i + 0]) );
  }
  i2798.materialFlags = i2808
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2813 = data
  i2812.name = i2813[0]
  i2812.value = i2813[1]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2817 = data
  i2816.name = i2817[0]
  i2816.value = new pc.Color(i2817[1], i2817[2], i2817[3], i2817[4])
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2821 = data
  i2820.name = i2821[0]
  i2820.value = new pc.Vec4( i2821[1], i2821[2], i2821[3], i2821[4] )
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2825 = data
  i2824.name = i2825[0]
  request.r(i2825[1], i2825[2], 0, i2824, 'value')
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2829 = data
  i2828.name = i2829[0]
  i2828.enabled = !!i2829[1]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2831 = data
  i2830.name = i2831[0]
  i2830.width = i2831[1]
  i2830.height = i2831[2]
  i2830.mipmapCount = i2831[3]
  i2830.anisoLevel = i2831[4]
  i2830.filterMode = i2831[5]
  i2830.hdr = !!i2831[6]
  i2830.format = i2831[7]
  i2830.wrapMode = i2831[8]
  i2830.alphaIsTransparency = !!i2831[9]
  i2830.alphaSource = i2831[10]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2833 = data
  i2832.position = new pc.Vec3( i2833[0], i2833[1], i2833[2] )
  i2832.scale = new pc.Vec3( i2833[3], i2833[4], i2833[5] )
  i2832.rotation = new pc.Quat(i2833[6], i2833[7], i2833[8], i2833[9])
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2835 = data
  i2834.usedByComposite = !!i2835[0]
  i2834.autoTiling = !!i2835[1]
  i2834.size = new pc.Vec2( i2835[2], i2835[3] )
  i2834.edgeRadius = i2835[4]
  i2834.enabled = !!i2835[5]
  i2834.isTrigger = !!i2835[6]
  i2834.usedByEffector = !!i2835[7]
  i2834.density = i2835[8]
  i2834.offset = new pc.Vec2( i2835[9], i2835[10] )
  request.r(i2835[11], i2835[12], 0, i2834, 'material')
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2837 = data
  i2836.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2837[0], i2836.main)
  i2836.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2837[1], i2836.colorBySpeed)
  i2836.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2837[2], i2836.colorOverLifetime)
  i2836.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2837[3], i2836.emission)
  i2836.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2837[4], i2836.rotationBySpeed)
  i2836.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2837[5], i2836.rotationOverLifetime)
  i2836.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2837[6], i2836.shape)
  i2836.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2837[7], i2836.sizeBySpeed)
  i2836.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2837[8], i2836.sizeOverLifetime)
  i2836.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2837[9], i2836.textureSheetAnimation)
  i2836.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2837[10], i2836.velocityOverLifetime)
  i2836.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2837[11], i2836.noise)
  i2836.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2837[12], i2836.inheritVelocity)
  i2836.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2837[13], i2836.forceOverLifetime)
  i2836.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2837[14], i2836.limitVelocityOverLifetime)
  i2836.useAutoRandomSeed = !!i2837[15]
  i2836.randomSeed = i2837[16]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2838 = root || new pc.ParticleSystemMain()
  var i2839 = data
  i2838.duration = i2839[0]
  i2838.loop = !!i2839[1]
  i2838.prewarm = !!i2839[2]
  i2838.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[3], i2838.startDelay)
  i2838.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[4], i2838.startLifetime)
  i2838.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[5], i2838.startSpeed)
  i2838.startSize3D = !!i2839[6]
  i2838.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[7], i2838.startSizeX)
  i2838.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[8], i2838.startSizeY)
  i2838.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[9], i2838.startSizeZ)
  i2838.startRotation3D = !!i2839[10]
  i2838.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[11], i2838.startRotationX)
  i2838.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[12], i2838.startRotationY)
  i2838.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[13], i2838.startRotationZ)
  i2838.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2839[14], i2838.startColor)
  i2838.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2839[15], i2838.gravityModifier)
  i2838.simulationSpace = i2839[16]
  request.r(i2839[17], i2839[18], 0, i2838, 'customSimulationSpace')
  i2838.simulationSpeed = i2839[19]
  i2838.useUnscaledTime = !!i2839[20]
  i2838.scalingMode = i2839[21]
  i2838.playOnAwake = !!i2839[22]
  i2838.maxParticles = i2839[23]
  i2838.emitterVelocityMode = i2839[24]
  i2838.stopAction = i2839[25]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2840 = root || new pc.MinMaxCurve()
  var i2841 = data
  i2840.mode = i2841[0]
  i2840.curveMin = new pc.AnimationCurve( { keys_flow: i2841[1] } )
  i2840.curveMax = new pc.AnimationCurve( { keys_flow: i2841[2] } )
  i2840.curveMultiplier = i2841[3]
  i2840.constantMin = i2841[4]
  i2840.constantMax = i2841[5]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2842 = root || new pc.MinMaxGradient()
  var i2843 = data
  i2842.mode = i2843[0]
  i2842.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2843[1], i2842.gradientMin)
  i2842.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2843[2], i2842.gradientMax)
  i2842.colorMin = new pc.Color(i2843[3], i2843[4], i2843[5], i2843[6])
  i2842.colorMax = new pc.Color(i2843[7], i2843[8], i2843[9], i2843[10])
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2845 = data
  i2844.mode = i2845[0]
  var i2847 = i2845[1]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2847[i + 0]) );
  }
  i2844.colorKeys = i2846
  var i2849 = i2845[2]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2849[i + 0]) );
  }
  i2844.alphaKeys = i2848
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2850 = root || new pc.ParticleSystemColorBySpeed()
  var i2851 = data
  i2850.enabled = !!i2851[0]
  i2850.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2851[1], i2850.color)
  i2850.range = new pc.Vec2( i2851[2], i2851[3] )
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2855 = data
  i2854.color = new pc.Color(i2855[0], i2855[1], i2855[2], i2855[3])
  i2854.time = i2855[4]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2859 = data
  i2858.alpha = i2859[0]
  i2858.time = i2859[1]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2860 = root || new pc.ParticleSystemColorOverLifetime()
  var i2861 = data
  i2860.enabled = !!i2861[0]
  i2860.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2861[1], i2860.color)
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2862 = root || new pc.ParticleSystemEmitter()
  var i2863 = data
  i2862.enabled = !!i2863[0]
  i2862.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2863[1], i2862.rateOverTime)
  i2862.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2863[2], i2862.rateOverDistance)
  var i2865 = i2863[3]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2865[i + 0]) );
  }
  i2862.bursts = i2864
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2868 = root || new pc.ParticleSystemBurst()
  var i2869 = data
  i2868.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2869[0], i2868.count)
  i2868.cycleCount = i2869[1]
  i2868.minCount = i2869[2]
  i2868.maxCount = i2869[3]
  i2868.repeatInterval = i2869[4]
  i2868.time = i2869[5]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2870 = root || new pc.ParticleSystemRotationBySpeed()
  var i2871 = data
  i2870.enabled = !!i2871[0]
  i2870.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2871[1], i2870.x)
  i2870.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2871[2], i2870.y)
  i2870.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2871[3], i2870.z)
  i2870.separateAxes = !!i2871[4]
  i2870.range = new pc.Vec2( i2871[5], i2871[6] )
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2872 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2873 = data
  i2872.enabled = !!i2873[0]
  i2872.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2873[1], i2872.x)
  i2872.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2873[2], i2872.y)
  i2872.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2873[3], i2872.z)
  i2872.separateAxes = !!i2873[4]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2874 = root || new pc.ParticleSystemShape()
  var i2875 = data
  i2874.enabled = !!i2875[0]
  i2874.shapeType = i2875[1]
  i2874.randomDirectionAmount = i2875[2]
  i2874.sphericalDirectionAmount = i2875[3]
  i2874.randomPositionAmount = i2875[4]
  i2874.alignToDirection = !!i2875[5]
  i2874.radius = i2875[6]
  i2874.radiusMode = i2875[7]
  i2874.radiusSpread = i2875[8]
  i2874.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2875[9], i2874.radiusSpeed)
  i2874.radiusThickness = i2875[10]
  i2874.angle = i2875[11]
  i2874.length = i2875[12]
  i2874.boxThickness = new pc.Vec3( i2875[13], i2875[14], i2875[15] )
  i2874.meshShapeType = i2875[16]
  request.r(i2875[17], i2875[18], 0, i2874, 'mesh')
  request.r(i2875[19], i2875[20], 0, i2874, 'meshRenderer')
  request.r(i2875[21], i2875[22], 0, i2874, 'skinnedMeshRenderer')
  i2874.useMeshMaterialIndex = !!i2875[23]
  i2874.meshMaterialIndex = i2875[24]
  i2874.useMeshColors = !!i2875[25]
  i2874.normalOffset = i2875[26]
  i2874.arc = i2875[27]
  i2874.arcMode = i2875[28]
  i2874.arcSpread = i2875[29]
  i2874.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2875[30], i2874.arcSpeed)
  i2874.donutRadius = i2875[31]
  i2874.position = new pc.Vec3( i2875[32], i2875[33], i2875[34] )
  i2874.rotation = new pc.Vec3( i2875[35], i2875[36], i2875[37] )
  i2874.scale = new pc.Vec3( i2875[38], i2875[39], i2875[40] )
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2876 = root || new pc.ParticleSystemSizeBySpeed()
  var i2877 = data
  i2876.enabled = !!i2877[0]
  i2876.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2877[1], i2876.x)
  i2876.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2877[2], i2876.y)
  i2876.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2877[3], i2876.z)
  i2876.separateAxes = !!i2877[4]
  i2876.range = new pc.Vec2( i2877[5], i2877[6] )
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2878 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2879 = data
  i2878.enabled = !!i2879[0]
  i2878.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2879[1], i2878.x)
  i2878.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2879[2], i2878.y)
  i2878.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2879[3], i2878.z)
  i2878.separateAxes = !!i2879[4]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2880 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2881 = data
  i2880.enabled = !!i2881[0]
  i2880.mode = i2881[1]
  i2880.animation = i2881[2]
  i2880.numTilesX = i2881[3]
  i2880.numTilesY = i2881[4]
  i2880.useRandomRow = !!i2881[5]
  i2880.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2881[6], i2880.frameOverTime)
  i2880.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2881[7], i2880.startFrame)
  i2880.cycleCount = i2881[8]
  i2880.rowIndex = i2881[9]
  i2880.flipU = i2881[10]
  i2880.flipV = i2881[11]
  i2880.spriteCount = i2881[12]
  var i2883 = i2881[13]
  var i2882 = []
  for(var i = 0; i < i2883.length; i += 2) {
  request.r(i2883[i + 0], i2883[i + 1], 2, i2882, '')
  }
  i2880.sprites = i2882
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2886 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2887 = data
  i2886.enabled = !!i2887[0]
  i2886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[1], i2886.x)
  i2886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[2], i2886.y)
  i2886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[3], i2886.z)
  i2886.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[4], i2886.radial)
  i2886.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[5], i2886.speedModifier)
  i2886.space = i2887[6]
  i2886.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[7], i2886.orbitalX)
  i2886.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[8], i2886.orbitalY)
  i2886.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[9], i2886.orbitalZ)
  i2886.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[10], i2886.orbitalOffsetX)
  i2886.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[11], i2886.orbitalOffsetY)
  i2886.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2887[12], i2886.orbitalOffsetZ)
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2888 = root || new pc.ParticleSystemNoise()
  var i2889 = data
  i2888.enabled = !!i2889[0]
  i2888.separateAxes = !!i2889[1]
  i2888.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[2], i2888.strengthX)
  i2888.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[3], i2888.strengthY)
  i2888.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[4], i2888.strengthZ)
  i2888.frequency = i2889[5]
  i2888.damping = !!i2889[6]
  i2888.octaveCount = i2889[7]
  i2888.octaveMultiplier = i2889[8]
  i2888.octaveScale = i2889[9]
  i2888.quality = i2889[10]
  i2888.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[11], i2888.scrollSpeed)
  i2888.scrollSpeedMultiplier = i2889[12]
  i2888.remapEnabled = !!i2889[13]
  i2888.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[14], i2888.remapX)
  i2888.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[15], i2888.remapY)
  i2888.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[16], i2888.remapZ)
  i2888.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[17], i2888.positionAmount)
  i2888.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[18], i2888.rotationAmount)
  i2888.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2889[19], i2888.sizeAmount)
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2890 = root || new pc.ParticleSystemInheritVelocity()
  var i2891 = data
  i2890.enabled = !!i2891[0]
  i2890.mode = i2891[1]
  i2890.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2891[2], i2890.curve)
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2892 = root || new pc.ParticleSystemForceOverLifetime()
  var i2893 = data
  i2892.enabled = !!i2893[0]
  i2892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2893[1], i2892.x)
  i2892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2893[2], i2892.y)
  i2892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2893[3], i2892.z)
  i2892.space = i2893[4]
  i2892.randomized = !!i2893[5]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2894 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2895 = data
  i2894.enabled = !!i2895[0]
  i2894.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2895[1], i2894.limit)
  i2894.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2895[2], i2894.limitX)
  i2894.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2895[3], i2894.limitY)
  i2894.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2895[4], i2894.limitZ)
  i2894.dampen = i2895[5]
  i2894.separateAxes = !!i2895[6]
  i2894.space = i2895[7]
  i2894.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2895[8], i2894.drag)
  i2894.multiplyDragByParticleSize = !!i2895[9]
  i2894.multiplyDragByParticleVelocity = !!i2895[10]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2897 = data
  i2896.enabled = !!i2897[0]
  request.r(i2897[1], i2897[2], 0, i2896, 'sharedMaterial')
  var i2899 = i2897[3]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 2) {
  request.r(i2899[i + 0], i2899[i + 1], 2, i2898, '')
  }
  i2896.sharedMaterials = i2898
  i2896.receiveShadows = !!i2897[4]
  i2896.shadowCastingMode = i2897[5]
  i2896.sortingLayerID = i2897[6]
  i2896.sortingOrder = i2897[7]
  i2896.lightmapIndex = i2897[8]
  i2896.lightmapSceneIndex = i2897[9]
  i2896.lightmapScaleOffset = new pc.Vec4( i2897[10], i2897[11], i2897[12], i2897[13] )
  i2896.lightProbeUsage = i2897[14]
  i2896.reflectionProbeUsage = i2897[15]
  request.r(i2897[16], i2897[17], 0, i2896, 'mesh')
  i2896.meshCount = i2897[18]
  i2896.activeVertexStreamsCount = i2897[19]
  i2896.alignment = i2897[20]
  i2896.renderMode = i2897[21]
  i2896.sortMode = i2897[22]
  i2896.lengthScale = i2897[23]
  i2896.velocityScale = i2897[24]
  i2896.cameraVelocityScale = i2897[25]
  i2896.normalDirection = i2897[26]
  i2896.sortingFudge = i2897[27]
  i2896.minParticleSize = i2897[28]
  i2896.maxParticleSize = i2897[29]
  i2896.pivot = new pc.Vec3( i2897[30], i2897[31], i2897[32] )
  request.r(i2897[33], i2897[34], 0, i2896, 'trailMaterial')
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2903 = data
  i2902.name = i2903[0]
  i2902.tagId = i2903[1]
  i2902.enabled = !!i2903[2]
  i2902.isStatic = !!i2903[3]
  i2902.layer = i2903[4]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2905 = data
  i2904.enabled = !!i2905[0]
  request.r(i2905[1], i2905[2], 0, i2904, 'sharedMaterial')
  var i2907 = i2905[3]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 2) {
  request.r(i2907[i + 0], i2907[i + 1], 2, i2906, '')
  }
  i2904.sharedMaterials = i2906
  i2904.receiveShadows = !!i2905[4]
  i2904.shadowCastingMode = i2905[5]
  i2904.sortingLayerID = i2905[6]
  i2904.sortingOrder = i2905[7]
  i2904.lightmapIndex = i2905[8]
  i2904.lightmapSceneIndex = i2905[9]
  i2904.lightmapScaleOffset = new pc.Vec4( i2905[10], i2905[11], i2905[12], i2905[13] )
  i2904.lightProbeUsage = i2905[14]
  i2904.reflectionProbeUsage = i2905[15]
  i2904.color = new pc.Color(i2905[16], i2905[17], i2905[18], i2905[19])
  request.r(i2905[20], i2905[21], 0, i2904, 'sprite')
  i2904.flipX = !!i2905[22]
  i2904.flipY = !!i2905[23]
  i2904.drawMode = i2905[24]
  i2904.size = new pc.Vec2( i2905[25], i2905[26] )
  i2904.tileMode = i2905[27]
  i2904.adaptiveModeThreshold = i2905[28]
  i2904.maskInteraction = i2905[29]
  i2904.spriteSortPoint = i2905[30]
  return i2904
}

Deserializers["DemoBreakable"] = function (request, data, root) {
  var i2908 = root || request.c( 'DemoBreakable' )
  var i2909 = data
  request.r(i2909[0], i2909[1], 0, i2908, 'gameManager')
  request.r(i2909[2], i2909[3], 0, i2908, 'particle')
  request.r(i2909[4], i2909[5], 0, i2908, 'particle2')
  request.r(i2909[6], i2909[7], 0, i2908, 'sfxAudio')
  i2908.particleCounter = i2909[8]
  return i2908
}

Deserializers["BreakbleSquare"] = function (request, data, root) {
  var i2910 = root || request.c( 'BreakbleSquare' )
  var i2911 = data
  request.r(i2911[0], i2911[1], 0, i2910, 'gameManager')
  request.r(i2911[2], i2911[3], 0, i2910, 'particle')
  request.r(i2911[4], i2911[5], 0, i2910, 'particle2')
  request.r(i2911[6], i2911[7], 0, i2910, 'sfxAudio')
  i2910.particleCounter = i2911[8]
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2913 = data
  i2912.radius = i2913[0]
  i2912.enabled = !!i2913[1]
  i2912.isTrigger = !!i2913[2]
  i2912.usedByEffector = !!i2913[3]
  i2912.density = i2913[4]
  i2912.offset = new pc.Vec2( i2913[5], i2913[6] )
  request.r(i2913[7], i2913[8], 0, i2912, 'material')
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2915 = data
  request.r(i2915[0], i2915[1], 0, i2914, 'animatorController')
  request.r(i2915[2], i2915[3], 0, i2914, 'avatar')
  i2914.updateMode = i2915[4]
  i2914.hasTransformHierarchy = !!i2915[5]
  var i2917 = i2915[6]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 2) {
  request.r(i2917[i + 0], i2917[i + 1], 2, i2916, '')
  }
  i2914.humanBones = i2916
  i2914.enabled = !!i2915[7]
  return i2914
}

Deserializers["DemoJumpPluser"] = function (request, data, root) {
  var i2920 = root || request.c( 'DemoJumpPluser' )
  var i2921 = data
  i2920.taken = !!i2921[0]
  return i2920
}

Deserializers["JumpPluser"] = function (request, data, root) {
  var i2922 = root || request.c( 'JumpPluser' )
  var i2923 = data
  request.r(i2923[0], i2923[1], 0, i2922, 'sfxAudio')
  i2922.taken = !!i2923[2]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i2925 = data
  i2924.enabled = !!i2925[0]
  i2924.isTrigger = !!i2925[1]
  i2924.usedByEffector = !!i2925[2]
  i2924.density = i2925[3]
  i2924.offset = new pc.Vec2( i2925[4], i2925[5] )
  request.r(i2925[6], i2925[7], 0, i2924, 'material')
  i2924.edgeRadius = i2925[8]
  var i2927 = i2925[9]
  var i2926 = []
  for(var i = 0; i < i2927.length; i += 2) {
    i2926.push( new pc.Vec2( i2927[i + 0], i2927[i + 1] ) );
  }
  i2924.points = i2926
  i2924.useAdjacentStartPoint = !!i2925[10]
  i2924.adjacentStartPoint = new pc.Vec2( i2925[11], i2925[12] )
  i2924.useAdjacentEndPoint = !!i2925[13]
  i2924.adjacentEndPoint = new pc.Vec2( i2925[14], i2925[15] )
  return i2924
}

Deserializers["Triangle"] = function (request, data, root) {
  var i2930 = root || request.c( 'Triangle' )
  var i2931 = data
  request.r(i2931[0], i2931[1], 0, i2930, 'ballBomb')
  request.r(i2931[2], i2931[3], 0, i2930, 'sfxAudio')
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2933 = data
  i2932.enabled = !!i2933[0]
  request.r(i2933[1], i2933[2], 0, i2932, 'sharedMaterial')
  var i2935 = i2933[3]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 2) {
  request.r(i2935[i + 0], i2935[i + 1], 2, i2934, '')
  }
  i2932.sharedMaterials = i2934
  i2932.receiveShadows = !!i2933[4]
  i2932.shadowCastingMode = i2933[5]
  i2932.sortingLayerID = i2933[6]
  i2932.sortingOrder = i2933[7]
  i2932.lightmapIndex = i2933[8]
  i2932.lightmapSceneIndex = i2933[9]
  i2932.lightmapScaleOffset = new pc.Vec4( i2933[10], i2933[11], i2933[12], i2933[13] )
  i2932.lightProbeUsage = i2933[14]
  i2932.reflectionProbeUsage = i2933[15]
  var i2937 = i2933[16]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 3) {
    i2936.push( new pc.Vec3( i2937[i + 0], i2937[i + 1], i2937[i + 2] ) );
  }
  i2932.positions = i2936
  i2932.positionCount = i2933[17]
  i2932.time = i2933[18]
  i2932.startWidth = i2933[19]
  i2932.endWidth = i2933[20]
  i2932.widthMultiplier = i2933[21]
  i2932.autodestruct = !!i2933[22]
  i2932.emitting = !!i2933[23]
  i2932.numCornerVertices = i2933[24]
  i2932.numCapVertices = i2933[25]
  i2932.minVertexDistance = i2933[26]
  i2932.colorGradient = i2933[27] ? new pc.ColorGradient(i2933[27][0], i2933[27][1], i2933[27][2]) : null
  i2932.startColor = new pc.Color(i2933[28], i2933[29], i2933[30], i2933[31])
  i2932.endColor = new pc.Color(i2933[32], i2933[33], i2933[34], i2933[35])
  i2932.generateLightingData = !!i2933[36]
  i2932.textureMode = i2933[37]
  i2932.alignment = i2933[38]
  i2932.widthCurve = new pc.AnimationCurve( { keys_flow: i2933[39] } )
  return i2932
}

Deserializers["particleAttractorLinear"] = function (request, data, root) {
  var i2940 = root || request.c( 'particleAttractorLinear' )
  var i2941 = data
  request.r(i2941[0], i2941[1], 0, i2940, 'target')
  i2940.speed = i2941[2]
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2943 = data
  request.r(i2943[0], i2943[1], 0, i2942, 'sharedMesh')
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2945 = data
  request.r(i2945[0], i2945[1], 0, i2944, 'additionalVertexStreams')
  i2944.enabled = !!i2945[2]
  request.r(i2945[3], i2945[4], 0, i2944, 'sharedMaterial')
  var i2947 = i2945[5]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 2) {
  request.r(i2947[i + 0], i2947[i + 1], 2, i2946, '')
  }
  i2944.sharedMaterials = i2946
  i2944.receiveShadows = !!i2945[6]
  i2944.shadowCastingMode = i2945[7]
  i2944.sortingLayerID = i2945[8]
  i2944.sortingOrder = i2945[9]
  i2944.lightmapIndex = i2945[10]
  i2944.lightmapSceneIndex = i2945[11]
  i2944.lightmapScaleOffset = new pc.Vec4( i2945[12], i2945[13], i2945[14], i2945[15] )
  i2944.lightProbeUsage = i2945[16]
  i2944.reflectionProbeUsage = i2945[17]
  return i2944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2949 = data
  i2948.name = i2949[0]
  i2948.halfPrecision = !!i2949[1]
  i2948.vertexCount = i2949[2]
  i2948.aabb = i2949[3]
  var i2951 = i2949[4]
  var i2950 = []
  for(var i = 0; i < i2951.length; i += 1) {
    i2950.push( !!i2951[i + 0] );
  }
  i2948.streams = i2950
  i2948.vertices = i2949[5]
  var i2953 = i2949[6]
  var i2952 = []
  for(var i = 0; i < i2953.length; i += 1) {
    i2952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2953[i + 0]) );
  }
  i2948.subMeshes = i2952
  var i2955 = i2949[7]
  var i2954 = []
  for(var i = 0; i < i2955.length; i += 16) {
    i2954.push( new pc.Mat4().setData(i2955[i + 0], i2955[i + 1], i2955[i + 2], i2955[i + 3],  i2955[i + 4], i2955[i + 5], i2955[i + 6], i2955[i + 7],  i2955[i + 8], i2955[i + 9], i2955[i + 10], i2955[i + 11],  i2955[i + 12], i2955[i + 13], i2955[i + 14], i2955[i + 15]) );
  }
  i2948.bindposes = i2954
  var i2957 = i2949[8]
  var i2956 = []
  for(var i = 0; i < i2957.length; i += 1) {
    i2956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2957[i + 0]) );
  }
  i2948.blendShapes = i2956
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2963 = data
  i2962.triangles = i2963[0]
  return i2962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2969 = data
  i2968.name = i2969[0]
  var i2971 = i2969[1]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2971[i + 0]) );
  }
  i2968.frames = i2970
  return i2968
}

Deserializers["rotation"] = function (request, data, root) {
  var i2972 = root || request.c( 'rotation' )
  var i2973 = data
  i2972.xRotation = i2973[0]
  i2972.yRotation = i2973[1]
  i2972.zRotation = i2973[2]
  return i2972
}

Deserializers["particleAttractorSpherical"] = function (request, data, root) {
  var i2974 = root || request.c( 'particleAttractorSpherical' )
  var i2975 = data
  request.r(i2975[0], i2975[1], 0, i2974, 'target')
  i2974.speed = i2975[2]
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2977 = data
  i2976.pivot = new pc.Vec2( i2977[0], i2977[1] )
  i2976.anchorMin = new pc.Vec2( i2977[2], i2977[3] )
  i2976.anchorMax = new pc.Vec2( i2977[4], i2977[5] )
  i2976.sizeDelta = new pc.Vec2( i2977[6], i2977[7] )
  i2976.anchoredPosition3D = new pc.Vec3( i2977[8], i2977[9], i2977[10] )
  i2976.rotation = new pc.Quat(i2977[11], i2977[12], i2977[13], i2977[14])
  i2976.scale = new pc.Vec3( i2977[15], i2977[16], i2977[17] )
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2979 = data
  i2978.cullTransparentMesh = !!i2979[0]
  return i2978
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2980 = root || request.c( 'UnityEngine.UI.Image' )
  var i2981 = data
  request.r(i2981[0], i2981[1], 0, i2980, 'm_Sprite')
  i2980.m_Type = i2981[2]
  i2980.m_PreserveAspect = !!i2981[3]
  i2980.m_FillCenter = !!i2981[4]
  i2980.m_FillMethod = i2981[5]
  i2980.m_FillAmount = i2981[6]
  i2980.m_FillClockwise = !!i2981[7]
  i2980.m_FillOrigin = i2981[8]
  i2980.m_UseSpriteMesh = !!i2981[9]
  i2980.m_PixelsPerUnitMultiplier = i2981[10]
  request.r(i2981[11], i2981[12], 0, i2980, 'm_Material')
  i2980.m_Maskable = !!i2981[13]
  i2980.m_Color = new pc.Color(i2981[14], i2981[15], i2981[16], i2981[17])
  i2980.m_RaycastTarget = !!i2981[18]
  i2980.m_RaycastPadding = new pc.Vec4( i2981[19], i2981[20], i2981[21], i2981[22] )
  return i2980
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2982 = root || request.c( 'UnityEngine.UI.Button' )
  var i2983 = data
  i2982.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2983[0], i2982.m_OnClick)
  i2982.m_Navigation = request.d('UnityEngine.UI.Navigation', i2983[1], i2982.m_Navigation)
  i2982.m_Transition = i2983[2]
  i2982.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2983[3], i2982.m_Colors)
  i2982.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2983[4], i2982.m_SpriteState)
  i2982.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2983[5], i2982.m_AnimationTriggers)
  i2982.m_Interactable = !!i2983[6]
  request.r(i2983[7], i2983[8], 0, i2982, 'm_TargetGraphic')
  return i2982
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2984 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2985 = data
  i2984.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2985[0], i2984.m_PersistentCalls)
  return i2984
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2986 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2987 = data
  var i2989 = i2987[0]
  var i2988 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2989.length; i += 1) {
    i2988.add(request.d('UnityEngine.Events.PersistentCall', i2989[i + 0]));
  }
  i2986.m_Calls = i2988
  return i2986
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2992 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2993 = data
  request.r(i2993[0], i2993[1], 0, i2992, 'm_Target')
  i2992.m_TargetAssemblyTypeName = i2993[2]
  i2992.m_MethodName = i2993[3]
  i2992.m_Mode = i2993[4]
  i2992.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2993[5], i2992.m_Arguments)
  i2992.m_CallState = i2993[6]
  return i2992
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2994 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2995 = data
  i2994.m_Mode = i2995[0]
  i2994.m_WrapAround = !!i2995[1]
  request.r(i2995[2], i2995[3], 0, i2994, 'm_SelectOnUp')
  request.r(i2995[4], i2995[5], 0, i2994, 'm_SelectOnDown')
  request.r(i2995[6], i2995[7], 0, i2994, 'm_SelectOnLeft')
  request.r(i2995[8], i2995[9], 0, i2994, 'm_SelectOnRight')
  return i2994
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2996 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2997 = data
  i2996.m_NormalColor = new pc.Color(i2997[0], i2997[1], i2997[2], i2997[3])
  i2996.m_HighlightedColor = new pc.Color(i2997[4], i2997[5], i2997[6], i2997[7])
  i2996.m_PressedColor = new pc.Color(i2997[8], i2997[9], i2997[10], i2997[11])
  i2996.m_SelectedColor = new pc.Color(i2997[12], i2997[13], i2997[14], i2997[15])
  i2996.m_DisabledColor = new pc.Color(i2997[16], i2997[17], i2997[18], i2997[19])
  i2996.m_ColorMultiplier = i2997[20]
  i2996.m_FadeDuration = i2997[21]
  return i2996
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2998 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2999 = data
  request.r(i2999[0], i2999[1], 0, i2998, 'm_HighlightedSprite')
  request.r(i2999[2], i2999[3], 0, i2998, 'm_PressedSprite')
  request.r(i2999[4], i2999[5], 0, i2998, 'm_SelectedSprite')
  request.r(i2999[6], i2999[7], 0, i2998, 'm_DisabledSprite')
  return i2998
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3000 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3001 = data
  i3000.m_NormalTrigger = i3001[0]
  i3000.m_HighlightedTrigger = i3001[1]
  i3000.m_PressedTrigger = i3001[2]
  i3000.m_SelectedTrigger = i3001[3]
  i3000.m_DisabledTrigger = i3001[4]
  return i3000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3003 = data
  i3002.name = i3003[0]
  i3002.atlasId = i3003[1]
  i3002.mipmapCount = i3003[2]
  i3002.hdr = !!i3003[3]
  i3002.size = i3003[4]
  i3002.anisoLevel = i3003[5]
  i3002.filterMode = i3003[6]
  i3002.wrapMode = i3003[7]
  var i3005 = i3003[8]
  var i3004 = []
  for(var i = 0; i < i3005.length; i += 4) {
    i3004.push( UnityEngine.Rect.MinMaxRect(i3005[i + 0], i3005[i + 1], i3005[i + 2], i3005[i + 3]) );
  }
  i3002.rects = i3004
  return i3002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3009 = data
  i3008.name = i3009[0]
  i3008.index = i3009[1]
  i3008.startup = !!i3009[2]
  return i3008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3011 = data
  i3010.enabled = !!i3011[0]
  i3010.aspect = i3011[1]
  i3010.orthographic = !!i3011[2]
  i3010.orthographicSize = i3011[3]
  i3010.backgroundColor = new pc.Color(i3011[4], i3011[5], i3011[6], i3011[7])
  i3010.nearClipPlane = i3011[8]
  i3010.farClipPlane = i3011[9]
  i3010.fieldOfView = i3011[10]
  i3010.depth = i3011[11]
  i3010.clearFlags = i3011[12]
  i3010.cullingMask = i3011[13]
  i3010.rect = i3011[14]
  request.r(i3011[15], i3011[16], 0, i3010, 'targetTexture')
  i3010.usePhysicalProperties = !!i3011[17]
  i3010.focalLength = i3011[18]
  i3010.sensorSize = new pc.Vec2( i3011[19], i3011[20] )
  i3010.lensShift = new pc.Vec2( i3011[21], i3011[22] )
  i3010.gateFit = i3011[23]
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3013 = data
  i3012.enabled = !!i3013[0]
  i3012.planeDistance = i3013[1]
  i3012.referencePixelsPerUnit = i3013[2]
  i3012.isFallbackOverlay = !!i3013[3]
  i3012.renderMode = i3013[4]
  i3012.renderOrder = i3013[5]
  i3012.sortingLayerName = i3013[6]
  i3012.sortingOrder = i3013[7]
  i3012.scaleFactor = i3013[8]
  request.r(i3013[9], i3013[10], 0, i3012, 'worldCamera')
  i3012.overrideSorting = !!i3013[11]
  i3012.pixelPerfect = !!i3013[12]
  i3012.targetDisplay = i3013[13]
  i3012.overridePixelPerfect = !!i3013[14]
  return i3012
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3014 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3015 = data
  i3014.m_UiScaleMode = i3015[0]
  i3014.m_ReferencePixelsPerUnit = i3015[1]
  i3014.m_ScaleFactor = i3015[2]
  i3014.m_ReferenceResolution = new pc.Vec2( i3015[3], i3015[4] )
  i3014.m_ScreenMatchMode = i3015[5]
  i3014.m_MatchWidthOrHeight = i3015[6]
  i3014.m_PhysicalUnit = i3015[7]
  i3014.m_FallbackScreenDPI = i3015[8]
  i3014.m_DefaultSpriteDPI = i3015[9]
  i3014.m_DynamicPixelsPerUnit = i3015[10]
  i3014.m_PresetInfoIsWorld = !!i3015[11]
  return i3014
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3016 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3017 = data
  i3016.m_IgnoreReversedGraphics = !!i3017[0]
  i3016.m_BlockingObjects = i3017[1]
  i3016.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3017[2] )
  return i3016
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3018 = root || request.c( 'UnityEngine.UI.Text' )
  var i3019 = data
  i3018.m_FontData = request.d('UnityEngine.UI.FontData', i3019[0], i3018.m_FontData)
  i3018.m_Text = i3019[1]
  request.r(i3019[2], i3019[3], 0, i3018, 'm_Material')
  i3018.m_Maskable = !!i3019[4]
  i3018.m_Color = new pc.Color(i3019[5], i3019[6], i3019[7], i3019[8])
  i3018.m_RaycastTarget = !!i3019[9]
  i3018.m_RaycastPadding = new pc.Vec4( i3019[10], i3019[11], i3019[12], i3019[13] )
  return i3018
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3020 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3021 = data
  request.r(i3021[0], i3021[1], 0, i3020, 'm_Font')
  i3020.m_FontSize = i3021[2]
  i3020.m_FontStyle = i3021[3]
  i3020.m_BestFit = !!i3021[4]
  i3020.m_MinSize = i3021[5]
  i3020.m_MaxSize = i3021[6]
  i3020.m_Alignment = i3021[7]
  i3020.m_AlignByGeometry = !!i3021[8]
  i3020.m_RichText = !!i3021[9]
  i3020.m_HorizontalOverflow = i3021[10]
  i3020.m_VerticalOverflow = i3021[11]
  i3020.m_LineSpacing = i3021[12]
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3023 = data
  i3022.bodyType = i3023[0]
  request.r(i3023[1], i3023[2], 0, i3022, 'material')
  i3022.simulated = !!i3023[3]
  i3022.useAutoMass = !!i3023[4]
  i3022.mass = i3023[5]
  i3022.drag = i3023[6]
  i3022.angularDrag = i3023[7]
  i3022.gravityScale = i3023[8]
  i3022.collisionDetectionMode = i3023[9]
  i3022.sleepMode = i3023[10]
  i3022.constraints = i3023[11]
  return i3022
}

Deserializers["PlayerTrail"] = function (request, data, root) {
  var i3024 = root || request.c( 'PlayerTrail' )
  var i3025 = data
  var i3027 = i3025[0]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 2) {
  request.r(i3027[i + 0], i3027[i + 1], 2, i3026, '')
  }
  i3024.trails = i3026
  i3024.trailIndex = i3025[1]
  i3024.trailTimes = i3025[2]
  i3024.trailTime = i3025[3]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3031 = data
  request.r(i3031[0], i3031[1], 0, i3030, 'clip')
  request.r(i3031[2], i3031[3], 0, i3030, 'outputAudioMixerGroup')
  i3030.playOnAwake = !!i3031[4]
  i3030.loop = !!i3031[5]
  i3030.time = i3031[6]
  i3030.volume = i3031[7]
  i3030.pitch = i3031[8]
  i3030.enabled = !!i3031[9]
  return i3030
}

Deserializers["DemoPlayerMovement"] = function (request, data, root) {
  var i3032 = root || request.c( 'DemoPlayerMovement' )
  var i3033 = data
  request.r(i3033[0], i3033[1], 0, i3032, 'helper')
  request.r(i3033[2], i3033[3], 0, i3032, 'finishtext')
  i3032.yon = i3033[4]
  i3032.speed = i3033[5]
  i3032.jumpForce = i3033[6]
  i3032.rotationSpeed = i3033[7]
  i3032.bptime = i3033[8]
  request.r(i3033[9], i3033[10], 0, i3032, 'rb')
  i3032.isGrounded = i3033[11]
  request.r(i3033[12], i3033[13], 0, i3032, 'gameManager')
  request.r(i3033[14], i3033[15], 0, i3032, 'fire')
  request.r(i3033[16], i3033[17], 0, i3032, 'demoTouch')
  i3032.jumpCount = i3033[18]
  i3032.powerCounter = i3033[19]
  i3032.touchtimerindex = i3033[20]
  i3032.helperTextIndex = i3033[21]
  request.r(i3033[22], i3033[23], 0, i3032, 'sfxAudio')
  i3032.touchable = !!i3033[24]
  i3032.veltemp = new pc.Vec2( i3033[25], i3033[26] )
  i3032.postemp = new pc.Vec2( i3033[27], i3033[28] )
  i3032.touchtimer = i3033[29]
  var i3035 = i3033[30]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.push( i3035[i + 0] );
  }
  i3032.helperTexts = i3034
  request.r(i3033[31], i3033[32], 0, i3032, 'g1')
  request.r(i3033[33], i3033[34], 0, i3032, 'g2')
  return i3032
}

Deserializers["WallScript"] = function (request, data, root) {
  var i3038 = root || request.c( 'WallScript' )
  var i3039 = data
  request.r(i3039[0], i3039[1], 0, i3038, 'friendWall')
  i3038.cameraY = i3039[2]
  return i3038
}

Deserializers["DemoManager"] = function (request, data, root) {
  var i3040 = root || request.c( 'DemoManager' )
  var i3041 = data
  var i3043 = i3041[0]
  var i3042 = []
  for(var i = 0; i < i3043.length; i += 2) {
  request.r(i3043[i + 0], i3043[i + 1], 2, i3042, '')
  }
  i3040.sfxAudios = i3042
  return i3040
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3046 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3047 = data
  request.r(i3047[0], i3047[1], 0, i3046, 'm_FirstSelected')
  i3046.m_sendNavigationEvents = !!i3047[2]
  i3046.m_DragThreshold = i3047[3]
  return i3046
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3048 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3049 = data
  i3048.m_HorizontalAxis = i3049[0]
  i3048.m_VerticalAxis = i3049[1]
  i3048.m_SubmitButton = i3049[2]
  i3048.m_CancelButton = i3049[3]
  i3048.m_InputActionsPerSecond = i3049[4]
  i3048.m_RepeatDelay = i3049[5]
  i3048.m_ForceModuleActive = !!i3049[6]
  i3048.m_SendPointerHoverToParent = !!i3049[7]
  return i3048
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3050 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3051 = data
  request.r(i3051[0], i3051[1], 0, i3050, 'm_ObjectArgument')
  i3050.m_ObjectArgumentAssemblyTypeName = i3051[2]
  i3050.m_IntArgument = i3051[3]
  i3050.m_FloatArgument = i3051[4]
  i3050.m_StringArgument = i3051[5]
  i3050.m_BoolArgument = !!i3051[6]
  return i3050
}

Deserializers["Fire"] = function (request, data, root) {
  var i3052 = root || request.c( 'Fire' )
  var i3053 = data
  return i3052
}

Deserializers["ADManager"] = function (request, data, root) {
  var i3054 = root || request.c( 'ADManager' )
  var i3055 = data
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3057 = data
  i3056.ambientIntensity = i3057[0]
  i3056.reflectionIntensity = i3057[1]
  i3056.ambientMode = i3057[2]
  i3056.ambientLight = new pc.Color(i3057[3], i3057[4], i3057[5], i3057[6])
  i3056.ambientSkyColor = new pc.Color(i3057[7], i3057[8], i3057[9], i3057[10])
  i3056.ambientGroundColor = new pc.Color(i3057[11], i3057[12], i3057[13], i3057[14])
  i3056.ambientEquatorColor = new pc.Color(i3057[15], i3057[16], i3057[17], i3057[18])
  i3056.fogColor = new pc.Color(i3057[19], i3057[20], i3057[21], i3057[22])
  i3056.fogEndDistance = i3057[23]
  i3056.fogStartDistance = i3057[24]
  i3056.fogDensity = i3057[25]
  i3056.fog = !!i3057[26]
  request.r(i3057[27], i3057[28], 0, i3056, 'skybox')
  i3056.fogMode = i3057[29]
  var i3059 = i3057[30]
  var i3058 = []
  for(var i = 0; i < i3059.length; i += 1) {
    i3058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3059[i + 0]) );
  }
  i3056.lightmaps = i3058
  i3056.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3057[31], i3056.lightProbes)
  i3056.lightmapsMode = i3057[32]
  i3056.mixedBakeMode = i3057[33]
  i3056.environmentLightingMode = i3057[34]
  i3056.ambientProbe = new pc.SphericalHarmonicsL2(i3057[35])
  i3056.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3057[36])
  i3056.useReferenceAmbientProbe = !!i3057[37]
  request.r(i3057[38], i3057[39], 0, i3056, 'customReflection')
  request.r(i3057[40], i3057[41], 0, i3056, 'defaultReflection')
  i3056.defaultReflectionMode = i3057[42]
  i3056.defaultReflectionResolution = i3057[43]
  i3056.sunLightObjectId = i3057[44]
  i3056.pixelLightCount = i3057[45]
  i3056.defaultReflectionHDR = !!i3057[46]
  i3056.hasLightDataAsset = !!i3057[47]
  i3056.hasManualGenerate = !!i3057[48]
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3063 = data
  request.r(i3063[0], i3063[1], 0, i3062, 'lightmapColor')
  request.r(i3063[2], i3063[3], 0, i3062, 'lightmapDirection')
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3064 = root || new UnityEngine.LightProbes()
  var i3065 = data
  return i3064
}

Deserializers["BallJump"] = function (request, data, root) {
  var i3070 = root || request.c( 'BallJump' )
  var i3071 = data
  i3070.jumpForce = i3071[0]
  i3070.speed = i3071[1]
  i3070.yon = i3071[2]
  return i3070
}

Deserializers["MenuManager"] = function (request, data, root) {
  var i3072 = root || request.c( 'MenuManager' )
  var i3073 = data
  return i3072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D"] = function (request, data, root) {
  var i3074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D' )
  var i3075 = data
  i3074.size = new pc.Vec2( i3075[0], i3075[1] )
  i3074.direction = i3075[2]
  i3074.enabled = !!i3075[3]
  i3074.isTrigger = !!i3075[4]
  i3074.usedByEffector = !!i3075[5]
  i3074.density = i3075[6]
  i3074.offset = new pc.Vec2( i3075[7], i3075[8] )
  request.r(i3075[9], i3075[10], 0, i3074, 'material')
  return i3074
}

Deserializers["Coin"] = function (request, data, root) {
  var i3076 = root || request.c( 'Coin' )
  var i3077 = data
  request.r(i3077[0], i3077[1], 0, i3076, 'coinText')
  request.r(i3077[2], i3077[3], 0, i3076, 'sfxAudio')
  return i3076
}

Deserializers["x2"] = function (request, data, root) {
  var i3078 = root || request.c( 'x2' )
  var i3079 = data
  request.r(i3079[0], i3079[1], 0, i3078, 'coinXText')
  request.r(i3079[2], i3079[3], 0, i3078, 'sfxAudio')
  return i3078
}

Deserializers["p2"] = function (request, data, root) {
  var i3080 = root || request.c( 'p2' )
  var i3081 = data
  request.r(i3081[0], i3081[1], 0, i3080, 'coinXText')
  request.r(i3081[2], i3081[3], 0, i3080, 'sfxAudio')
  return i3080
}

Deserializers["JumpSubber"] = function (request, data, root) {
  var i3082 = root || request.c( 'JumpSubber' )
  var i3083 = data
  request.r(i3083[0], i3083[1], 0, i3082, 'sfxAudio')
  return i3082
}

Deserializers["Testere"] = function (request, data, root) {
  var i3084 = root || request.c( 'Testere' )
  var i3085 = data
  i3084.yon = i3085[0]
  i3084.speed = i3085[1]
  i3084.rotationSpeed = i3085[2]
  request.r(i3085[3], i3085[4], 0, i3084, 'rb')
  request.r(i3085[5], i3085[6], 0, i3084, 'ballBomb')
  request.r(i3085[7], i3085[8], 0, i3084, 'sfxAudio')
  return i3084
}

Deserializers["PlayerMovement"] = function (request, data, root) {
  var i3086 = root || request.c( 'PlayerMovement' )
  var i3087 = data
  i3086.yon = i3087[0]
  i3086.speed = i3087[1]
  i3086.jumpForce = i3087[2]
  i3086.rotationSpeed = i3087[3]
  request.r(i3087[4], i3087[5], 0, i3086, 'rb')
  i3086.isGrounded = i3087[6]
  request.r(i3087[7], i3087[8], 0, i3086, 'gameManager')
  request.r(i3087[9], i3087[10], 0, i3086, 'fire')
  i3086.jumpCount = i3087[11]
  i3086.powerCounter = i3087[12]
  request.r(i3087[13], i3087[14], 0, i3086, 'sfxAudio')
  return i3086
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3088 = root || request.c( 'GameManager' )
  var i3089 = data
  request.r(i3089[0], i3089[1], 0, i3088, 'firsTouchButton')
  request.r(i3089[2], i3089[3], 0, i3088, 'shopButton')
  request.r(i3089[4], i3089[5], 0, i3088, 'settingsButton')
  request.r(i3089[6], i3089[7], 0, i3088, 'ground')
  request.r(i3089[8], i3089[9], 0, i3088, 'breakableSquare')
  request.r(i3089[10], i3089[11], 0, i3088, 'nonBreakableSquare')
  request.r(i3089[12], i3089[13], 0, i3088, 'coin')
  request.r(i3089[14], i3089[15], 0, i3088, 'x2')
  request.r(i3089[16], i3089[17], 0, i3088, 'p2')
  request.r(i3089[18], i3089[19], 0, i3088, 'jumpPluser')
  request.r(i3089[20], i3089[21], 0, i3088, 'jumpSubber')
  request.r(i3089[22], i3089[23], 0, i3088, 'lastGround')
  request.r(i3089[24], i3089[25], 0, i3088, 'fire')
  request.r(i3089[26], i3089[27], 0, i3088, 'gameOverPanel')
  request.r(i3089[28], i3089[29], 0, i3088, 'gameOverPanelADWatched')
  var i3091 = i3089[30]
  var i3090 = []
  for(var i = 0; i < i3091.length; i += 2) {
  request.r(i3091[i + 0], i3091[i + 1], 2, i3090, '')
  }
  i3088.enemies = i3090
  i3088.groundCount = i3089[31]
  i3088.bestScore = i3089[32]
  i3088.coinX = i3089[33]
  i3088.powerCounter = i3089[34]
  i3088.particleManager = i3089[35]
  i3088.aDWatched = i3089[36]
  var i3093 = i3089[37]
  var i3092 = []
  for(var i = 0; i < i3093.length; i += 2) {
    i3092.push( new pc.Vec2( i3093[i + 0], i3093[i + 1] ) );
  }
  i3088.locationOfGroundParts = i3092
  request.r(i3089[38], i3089[39], 0, i3088, 'tapToPlayText')
  request.r(i3089[40], i3089[41], 0, i3088, 'scoreText')
  request.r(i3089[42], i3089[43], 0, i3088, 'bestscoreText')
  request.r(i3089[44], i3089[45], 0, i3088, 'background')
  var i3095 = i3089[46]
  var i3094 = []
  for(var i = 0; i < i3095.length; i += 2) {
  request.r(i3095[i + 0], i3095[i + 1], 2, i3094, '')
  }
  i3088.backgroundSprites = i3094
  var i3097 = i3089[47]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 2) {
  request.r(i3097[i + 0], i3097[i + 1], 2, i3096, '')
  }
  i3088.ballSprites = i3096
  request.r(i3089[48], i3089[49], 0, i3088, 'musicVolume')
  request.r(i3089[50], i3089[51], 0, i3088, 'sfxVolume')
  var i3099 = i3089[52]
  var i3098 = []
  for(var i = 0; i < i3099.length; i += 2) {
  request.r(i3099[i + 0], i3099[i + 1], 2, i3098, '')
  }
  i3088.sfxAudios = i3098
  return i3088
}

Deserializers["SideWallsFollow"] = function (request, data, root) {
  var i3100 = root || request.c( 'SideWallsFollow' )
  var i3101 = data
  request.r(i3101[0], i3101[1], 0, i3100, 'playerTransform')
  return i3100
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3102 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3103 = data
  request.r(i3103[0], i3103[1], 0, i3102, 'm_FillRect')
  request.r(i3103[2], i3103[3], 0, i3102, 'm_HandleRect')
  i3102.m_Direction = i3103[4]
  i3102.m_MinValue = i3103[5]
  i3102.m_MaxValue = i3103[6]
  i3102.m_WholeNumbers = !!i3103[7]
  i3102.m_Value = i3103[8]
  i3102.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3103[9], i3102.m_OnValueChanged)
  i3102.m_Navigation = request.d('UnityEngine.UI.Navigation', i3103[10], i3102.m_Navigation)
  i3102.m_Transition = i3103[11]
  i3102.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3103[12], i3102.m_Colors)
  i3102.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3103[13], i3102.m_SpriteState)
  i3102.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3103[14], i3102.m_AnimationTriggers)
  i3102.m_Interactable = !!i3103[15]
  request.r(i3103[16], i3103[17], 0, i3102, 'm_TargetGraphic')
  return i3102
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3104 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3105 = data
  i3104.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3105[0], i3104.m_PersistentCalls)
  return i3104
}

Deserializers["Settingsmanager"] = function (request, data, root) {
  var i3106 = root || request.c( 'Settingsmanager' )
  var i3107 = data
  request.r(i3107[0], i3107[1], 0, i3106, 'sfxVolume')
  request.r(i3107[2], i3107[3], 0, i3106, 'musicVolume')
  return i3106
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i3108 = root || request.c( 'UnityEngine.UI.Mask' )
  var i3109 = data
  i3108.m_ShowMaskGraphic = !!i3109[0]
  return i3108
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i3110 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i3111 = data
  request.r(i3111[0], i3111[1], 0, i3110, 'm_Content')
  i3110.m_Horizontal = !!i3111[2]
  i3110.m_Vertical = !!i3111[3]
  i3110.m_MovementType = i3111[4]
  i3110.m_Elasticity = i3111[5]
  i3110.m_Inertia = !!i3111[6]
  i3110.m_DecelerationRate = i3111[7]
  i3110.m_ScrollSensitivity = i3111[8]
  request.r(i3111[9], i3111[10], 0, i3110, 'm_Viewport')
  request.r(i3111[11], i3111[12], 0, i3110, 'm_HorizontalScrollbar')
  request.r(i3111[13], i3111[14], 0, i3110, 'm_VerticalScrollbar')
  i3110.m_HorizontalScrollbarVisibility = i3111[15]
  i3110.m_VerticalScrollbarVisibility = i3111[16]
  i3110.m_HorizontalScrollbarSpacing = i3111[17]
  i3110.m_VerticalScrollbarSpacing = i3111[18]
  i3110.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i3111[19], i3110.m_OnValueChanged)
  return i3110
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i3112 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i3113 = data
  i3112.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3113[0], i3112.m_PersistentCalls)
  return i3112
}

Deserializers["TrailButtons"] = function (request, data, root) {
  var i3114 = root || request.c( 'TrailButtons' )
  var i3115 = data
  i3114.indexOfButton = i3115[0]
  i3114.playerPrefCommand = i3115[1]
  i3114.isButtonOpened = !!i3115[2]
  i3114.isButtonSelected = !!i3115[3]
  request.r(i3115[4], i3115[5], 0, i3114, 'shopManager')
  request.r(i3115[6], i3115[7], 0, i3114, 'btn')
  request.r(i3115[8], i3115[9], 0, i3114, 'coinText')
  request.r(i3115[10], i3115[11], 0, i3114, 'selectedText')
  return i3114
}

Deserializers["BackgroundButtons"] = function (request, data, root) {
  var i3116 = root || request.c( 'BackgroundButtons' )
  var i3117 = data
  i3116.indexOfButton = i3117[0]
  i3116.playerPrefCommand = i3117[1]
  i3116.isButtonOpened = !!i3117[2]
  i3116.isButtonSelected = !!i3117[3]
  request.r(i3117[4], i3117[5], 0, i3116, 'shopManager')
  request.r(i3117[6], i3117[7], 0, i3116, 'btn')
  request.r(i3117[8], i3117[9], 0, i3116, 'coinText')
  request.r(i3117[10], i3117[11], 0, i3116, 'selectedText')
  return i3116
}

Deserializers["BallButtons"] = function (request, data, root) {
  var i3118 = root || request.c( 'BallButtons' )
  var i3119 = data
  i3118.indexOfButton = i3119[0]
  i3118.moveRotate = i3119[1]
  i3118.playerPrefCommand = i3119[2]
  i3118.isButtonOpened = !!i3119[3]
  i3118.isButtonSelected = !!i3119[4]
  request.r(i3119[5], i3119[6], 0, i3118, 'shopManager')
  request.r(i3119[7], i3119[8], 0, i3118, 'btn')
  request.r(i3119[9], i3119[10], 0, i3118, 'coinText')
  request.r(i3119[11], i3119[12], 0, i3118, 'selectedText')
  return i3118
}

Deserializers["PanelSwitch"] = function (request, data, root) {
  var i3120 = root || request.c( 'PanelSwitch' )
  var i3121 = data
  var i3123 = i3121[0]
  var i3122 = []
  for(var i = 0; i < i3123.length; i += 2) {
  request.r(i3123[i + 0], i3123[i + 1], 2, i3122, '')
  }
  i3120.panels = i3122
  return i3120
}

Deserializers["ShopManager"] = function (request, data, root) {
  var i3124 = root || request.c( 'ShopManager' )
  var i3125 = data
  var i3127 = i3125[0]
  var i3126 = []
  for(var i = 0; i < i3127.length; i += 2) {
  request.r(i3127[i + 0], i3127[i + 1], 2, i3126, '')
  }
  i3124.backgroundSprites = i3126
  var i3129 = i3125[1]
  var i3128 = []
  for(var i = 0; i < i3129.length; i += 2) {
  request.r(i3129[i + 0], i3129[i + 1], 2, i3128, '')
  }
  i3124.ballSprites = i3128
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i3131 = data
  i3130.name = i3131[0]
  i3130.bounciness = i3131[1]
  i3130.friction = i3131[2]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3133 = data
  var i3135 = i3133[0]
  var i3134 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3135.length; i += 1) {
    i3134.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3135[i + 0]));
  }
  i3132.ShaderCompilationErrors = i3134
  i3132.name = i3133[1]
  i3132.guid = i3133[2]
  var i3137 = i3133[3]
  var i3136 = []
  for(var i = 0; i < i3137.length; i += 1) {
    i3136.push( i3137[i + 0] );
  }
  i3132.shaderDefinedKeywords = i3136
  var i3139 = i3133[4]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 1) {
    i3138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3139[i + 0]) );
  }
  i3132.passes = i3138
  var i3141 = i3133[5]
  var i3140 = []
  for(var i = 0; i < i3141.length; i += 1) {
    i3140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3141[i + 0]) );
  }
  i3132.usePasses = i3140
  var i3143 = i3133[6]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3143[i + 0]) );
  }
  i3132.defaultParameterValues = i3142
  request.r(i3133[7], i3133[8], 0, i3132, 'unityFallbackShader')
  i3132.readDepth = !!i3133[9]
  i3132.isCreatedByShaderGraph = !!i3133[10]
  i3132.usedBatchUniforms = i3133[11]
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3147 = data
  i3146.shaderName = i3147[0]
  i3146.errorMessage = i3147[1]
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3150 = root || new pc.UnityShaderPass()
  var i3151 = data
  i3150.id = i3151[0]
  i3150.subShaderIndex = i3151[1]
  i3150.name = i3151[2]
  i3150.passType = i3151[3]
  i3150.grabPassTextureName = i3151[4]
  i3150.usePass = !!i3151[5]
  i3150.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3151[6], i3150.zTest)
  i3150.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3151[7], i3150.zWrite)
  i3150.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3151[8], i3150.culling)
  i3150.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3151[9], i3150.blending)
  i3150.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3151[10], i3150.alphaBlending)
  i3150.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3151[11], i3150.colorWriteMask)
  i3150.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3151[12], i3150.offsetUnits)
  i3150.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3151[13], i3150.offsetFactor)
  i3150.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3151[14], i3150.stencilRef)
  i3150.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3151[15], i3150.stencilReadMask)
  i3150.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3151[16], i3150.stencilWriteMask)
  i3150.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3151[17], i3150.stencilOp)
  i3150.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3151[18], i3150.stencilOpFront)
  i3150.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3151[19], i3150.stencilOpBack)
  var i3153 = i3151[20]
  var i3152 = []
  for(var i = 0; i < i3153.length; i += 1) {
    i3152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3153[i + 0]) );
  }
  i3150.tags = i3152
  var i3155 = i3151[21]
  var i3154 = []
  for(var i = 0; i < i3155.length; i += 1) {
    i3154.push( i3155[i + 0] );
  }
  i3150.passDefinedKeywords = i3154
  var i3157 = i3151[22]
  var i3156 = []
  for(var i = 0; i < i3157.length; i += 1) {
    i3156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3157[i + 0]) );
  }
  i3150.passDefinedKeywordGroups = i3156
  var i3159 = i3151[23]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3159[i + 0]) );
  }
  i3150.variants = i3158
  var i3161 = i3151[24]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3161[i + 0]) );
  }
  i3150.excludedVariants = i3160
  i3150.hasDepthReader = !!i3151[25]
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3163 = data
  i3162.val = i3163[0]
  i3162.name = i3163[1]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3165 = data
  i3164.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3165[0], i3164.src)
  i3164.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3165[1], i3164.dst)
  i3164.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3165[2], i3164.op)
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3167 = data
  i3166.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3167[0], i3166.pass)
  i3166.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3167[1], i3166.fail)
  i3166.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3167[2], i3166.zFail)
  i3166.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3167[3], i3166.comp)
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3171 = data
  i3170.name = i3171[0]
  i3170.value = i3171[1]
  return i3170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3175 = data
  var i3177 = i3175[0]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( i3177[i + 0] );
  }
  i3174.keywords = i3176
  i3174.hasDiscard = !!i3175[1]
  return i3174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3181 = data
  i3180.passId = i3181[0]
  i3180.subShaderIndex = i3181[1]
  var i3183 = i3181[2]
  var i3182 = []
  for(var i = 0; i < i3183.length; i += 1) {
    i3182.push( i3183[i + 0] );
  }
  i3180.keywords = i3182
  i3180.vertexProgram = i3181[3]
  i3180.fragmentProgram = i3181[4]
  i3180.readDepth = !!i3181[5]
  return i3180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3187 = data
  request.r(i3187[0], i3187[1], 0, i3186, 'shader')
  i3186.pass = i3187[2]
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3191 = data
  i3190.name = i3191[0]
  i3190.type = i3191[1]
  i3190.value = new pc.Vec4( i3191[2], i3191[3], i3191[4], i3191[5] )
  i3190.textureValue = i3191[6]
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3193 = data
  i3192.name = i3193[0]
  request.r(i3193[1], i3193[2], 0, i3192, 'texture')
  i3192.aabb = i3193[3]
  i3192.vertices = i3193[4]
  i3192.triangles = i3193[5]
  i3192.textureRect = UnityEngine.Rect.MinMaxRect(i3193[6], i3193[7], i3193[8], i3193[9])
  i3192.packedRect = UnityEngine.Rect.MinMaxRect(i3193[10], i3193[11], i3193[12], i3193[13])
  i3192.border = new pc.Vec4( i3193[14], i3193[15], i3193[16], i3193[17] )
  i3192.transparency = i3193[18]
  i3192.bounds = i3193[19]
  i3192.pixelsPerUnit = i3193[20]
  i3192.textureWidth = i3193[21]
  i3192.textureHeight = i3193[22]
  i3192.nativeSize = new pc.Vec2( i3193[23], i3193[24] )
  i3192.pivot = new pc.Vec2( i3193[25], i3193[26] )
  i3192.textureRectOffset = new pc.Vec2( i3193[27], i3193[28] )
  return i3192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3195 = data
  i3194.name = i3195[0]
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3197 = data
  i3196.name = i3197[0]
  i3196.wrapMode = i3197[1]
  i3196.isLooping = !!i3197[2]
  i3196.length = i3197[3]
  var i3199 = i3197[4]
  var i3198 = []
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3199[i + 0]) );
  }
  i3196.curves = i3198
  var i3201 = i3197[5]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3201[i + 0]) );
  }
  i3196.events = i3200
  i3196.halfPrecision = !!i3197[6]
  i3196.frameRate = i3197[7]
  i3196.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3197[8], i3196.localBounds)
  i3196.hasMuscleCurves = !!i3197[9]
  var i3203 = i3197[10]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( i3203[i + 0] );
  }
  i3196.clipMuscleConstant = i3202
  i3196.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3197[11], i3196.clipBindingConstant)
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3207 = data
  i3206.path = i3207[0]
  i3206.componentType = i3207[1]
  i3206.property = i3207[2]
  i3206.keys = i3207[3]
  var i3209 = i3207[4]
  var i3208 = []
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3209[i + 0]) );
  }
  i3206.objectReferenceKeys = i3208
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3213 = data
  i3212.time = i3213[0]
  request.r(i3213[1], i3213[2], 0, i3212, 'value')
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3217 = data
  i3216.functionName = i3217[0]
  i3216.floatParameter = i3217[1]
  i3216.intParameter = i3217[2]
  i3216.stringParameter = i3217[3]
  request.r(i3217[4], i3217[5], 0, i3216, 'objectReferenceParameter')
  i3216.time = i3217[6]
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3219 = data
  i3218.center = new pc.Vec3( i3219[0], i3219[1], i3219[2] )
  i3218.extends = new pc.Vec3( i3219[3], i3219[4], i3219[5] )
  return i3218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3223 = data
  var i3225 = i3223[0]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.push( i3225[i + 0] );
  }
  i3222.genericBindings = i3224
  var i3227 = i3223[1]
  var i3226 = []
  for(var i = 0; i < i3227.length; i += 1) {
    i3226.push( i3227[i + 0] );
  }
  i3222.pptrCurveMapping = i3226
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3229 = data
  i3228.name = i3229[0]
  i3228.ascent = i3229[1]
  i3228.originalLineHeight = i3229[2]
  i3228.fontSize = i3229[3]
  var i3231 = i3229[4]
  var i3230 = []
  for(var i = 0; i < i3231.length; i += 1) {
    i3230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3231[i + 0]) );
  }
  i3228.characterInfo = i3230
  request.r(i3229[5], i3229[6], 0, i3228, 'texture')
  i3228.originalFontSize = i3229[7]
  return i3228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3235 = data
  i3234.index = i3235[0]
  i3234.advance = i3235[1]
  i3234.bearing = i3235[2]
  i3234.glyphWidth = i3235[3]
  i3234.glyphHeight = i3235[4]
  i3234.minX = i3235[5]
  i3234.maxX = i3235[6]
  i3234.minY = i3235[7]
  i3234.maxY = i3235[8]
  i3234.uvBottomLeftX = i3235[9]
  i3234.uvBottomLeftY = i3235[10]
  i3234.uvBottomRightX = i3235[11]
  i3234.uvBottomRightY = i3235[12]
  i3234.uvTopLeftX = i3235[13]
  i3234.uvTopLeftY = i3235[14]
  i3234.uvTopRightX = i3235[15]
  i3234.uvTopRightY = i3235[16]
  return i3234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3237 = data
  i3236.name = i3237[0]
  var i3239 = i3237[1]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3239[i + 0]) );
  }
  i3236.states = i3238
  var i3241 = i3237[2]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3241[i + 0]) );
  }
  i3236.layers = i3240
  var i3243 = i3237[3]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3243[i + 0]) );
  }
  i3236.parameters = i3242
  i3236.animationClips = i3237[4]
  i3236.HasSubStateMachines = !!i3237[5]
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3247 = data
  i3246.cycleOffset = i3247[0]
  i3246.cycleOffsetParameter = i3247[1]
  i3246.cycleOffsetParameterActive = !!i3247[2]
  i3246.mirror = !!i3247[3]
  i3246.mirrorParameter = i3247[4]
  i3246.mirrorParameterActive = !!i3247[5]
  i3246.motionId = i3247[6]
  i3246.nameHash = i3247[7]
  i3246.fullPathHash = i3247[8]
  i3246.speed = i3247[9]
  i3246.speedParameter = i3247[10]
  i3246.speedParameterActive = !!i3247[11]
  i3246.tag = i3247[12]
  i3246.name = i3247[13]
  i3246.layer = i3247[14]
  i3246.writeDefaultValues = !!i3247[15]
  var i3249 = i3247[16]
  var i3248 = []
  for(var i = 0; i < i3249.length; i += 1) {
    i3248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3249[i + 0]) );
  }
  i3246.transitions = i3248
  var i3251 = i3247[17]
  var i3250 = []
  for(var i = 0; i < i3251.length; i += 2) {
  request.r(i3251[i + 0], i3251[i + 1], 2, i3250, '')
  }
  i3246.behaviours = i3250
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3255 = data
  i3254.fullPath = i3255[0]
  i3254.canTransitionToSelf = !!i3255[1]
  i3254.duration = i3255[2]
  i3254.exitTime = i3255[3]
  i3254.hasExitTime = !!i3255[4]
  i3254.hasFixedDuration = !!i3255[5]
  i3254.interruptionSource = i3255[6]
  i3254.offset = i3255[7]
  i3254.orderedInterruption = !!i3255[8]
  i3254.destinationStateNameHash = i3255[9]
  i3254.destinationStateMachineId = i3255[10]
  i3254.isExit = !!i3255[11]
  i3254.mute = !!i3255[12]
  i3254.solo = !!i3255[13]
  var i3257 = i3255[14]
  var i3256 = []
  for(var i = 0; i < i3257.length; i += 1) {
    i3256.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3257[i + 0]) );
  }
  i3254.conditions = i3256
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3263 = data
  i3262.blendingMode = i3263[0]
  i3262.defaultWeight = i3263[1]
  i3262.name = i3263[2]
  i3262.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3263[3], i3262.stateMachine)
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3265 = data
  i3264.id = i3265[0]
  i3264.defaultStateNameHash = i3265[1]
  var i3267 = i3265[2]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3267[i + 0]) );
  }
  i3264.entryTransitions = i3266
  var i3269 = i3265[3]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3269[i + 0]) );
  }
  i3264.anyStateTransitions = i3268
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3273 = data
  i3272.destinationStateNameHash = i3273[0]
  i3272.destinationStateMachineId = i3273[1]
  i3272.isExit = !!i3273[2]
  i3272.mute = !!i3273[3]
  i3272.solo = !!i3273[4]
  var i3275 = i3273[5]
  var i3274 = []
  for(var i = 0; i < i3275.length; i += 1) {
    i3274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3275[i + 0]) );
  }
  i3272.conditions = i3274
  return i3272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3279 = data
  i3278.defaultBool = !!i3279[0]
  i3278.defaultFloat = i3279[1]
  i3278.defaultInt = i3279[2]
  i3278.name = i3279[3]
  i3278.nameHash = i3279[4]
  i3278.type = i3279[5]
  return i3278
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3280 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3281 = data
  i3280.useSafeMode = !!i3281[0]
  i3280.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3281[1], i3280.safeModeOptions)
  i3280.timeScale = i3281[2]
  i3280.unscaledTimeScale = i3281[3]
  i3280.useSmoothDeltaTime = !!i3281[4]
  i3280.maxSmoothUnscaledTime = i3281[5]
  i3280.rewindCallbackMode = i3281[6]
  i3280.showUnityEditorReport = !!i3281[7]
  i3280.logBehaviour = i3281[8]
  i3280.drawGizmos = !!i3281[9]
  i3280.defaultRecyclable = !!i3281[10]
  i3280.defaultAutoPlay = i3281[11]
  i3280.defaultUpdateType = i3281[12]
  i3280.defaultTimeScaleIndependent = !!i3281[13]
  i3280.defaultEaseType = i3281[14]
  i3280.defaultEaseOvershootOrAmplitude = i3281[15]
  i3280.defaultEasePeriod = i3281[16]
  i3280.defaultAutoKill = !!i3281[17]
  i3280.defaultLoopType = i3281[18]
  i3280.debugMode = !!i3281[19]
  i3280.debugStoreTargetId = !!i3281[20]
  i3280.showPreviewPanel = !!i3281[21]
  i3280.storeSettingsLocation = i3281[22]
  i3280.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3281[23], i3280.modules)
  i3280.createASMDEF = !!i3281[24]
  i3280.showPlayingTweens = !!i3281[25]
  i3280.showPausedTweens = !!i3281[26]
  return i3280
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3282 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3283 = data
  i3282.logBehaviour = i3283[0]
  i3282.nestedTweenFailureBehaviour = i3283[1]
  return i3282
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3284 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3285 = data
  i3284.showPanel = !!i3285[0]
  i3284.audioEnabled = !!i3285[1]
  i3284.physicsEnabled = !!i3285[2]
  i3284.physics2DEnabled = !!i3285[3]
  i3284.spriteEnabled = !!i3285[4]
  i3284.uiEnabled = !!i3285[5]
  i3284.textMeshProEnabled = !!i3285[6]
  i3284.tk2DEnabled = !!i3285[7]
  i3284.deAudioEnabled = !!i3285[8]
  i3284.deUnityExtendedEnabled = !!i3285[9]
  i3284.epoOutlineEnabled = !!i3285[10]
  return i3284
}

Deserializers["GoogleMobileAds.Editor.GoogleMobileAdsSettings"] = function (request, data, root) {
  var i3286 = root || request.c( 'GoogleMobileAds.Editor.GoogleMobileAdsSettings' )
  var i3287 = data
  i3286.adMobAndroidAppId = i3287[0]
  i3286.adMobIOSAppId = i3287[1]
  i3286.delayAppMeasurementInit = !!i3287[2]
  i3286.optimizeInitialization = !!i3287[3]
  i3286.optimizeAdLoading = !!i3287[4]
  i3286.userTrackingUsageDescription = i3287[5]
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3289 = data
  var i3291 = i3289[0]
  var i3290 = []
  for(var i = 0; i < i3291.length; i += 1) {
    i3290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3291[i + 0]) );
  }
  i3288.files = i3290
  i3288.componentToPrefabIds = i3289[1]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3295 = data
  i3294.path = i3295[0]
  request.r(i3295[1], i3295[2], 0, i3294, 'unityObject')
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3297 = data
  var i3299 = i3297[0]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3299[i + 0]) );
  }
  i3296.scriptsExecutionOrder = i3298
  var i3301 = i3297[1]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3301[i + 0]) );
  }
  i3296.sortingLayers = i3300
  var i3303 = i3297[2]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3303[i + 0]) );
  }
  i3296.cullingLayers = i3302
  i3296.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3297[3], i3296.timeSettings)
  i3296.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3297[4], i3296.physicsSettings)
  i3296.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3297[5], i3296.physics2DSettings)
  i3296.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3297[6], i3296.qualitySettings)
  i3296.enableRealtimeShadows = !!i3297[7]
  i3296.enableAutoInstancing = !!i3297[8]
  i3296.enableDynamicBatching = !!i3297[9]
  i3296.lightmapEncodingQuality = i3297[10]
  i3296.desiredColorSpace = i3297[11]
  var i3305 = i3297[12]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 1) {
    i3304.push( i3305[i + 0] );
  }
  i3296.allTags = i3304
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3309 = data
  i3308.name = i3309[0]
  i3308.value = i3309[1]
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3313 = data
  i3312.id = i3313[0]
  i3312.name = i3313[1]
  i3312.value = i3313[2]
  return i3312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3317 = data
  i3316.id = i3317[0]
  i3316.name = i3317[1]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3319 = data
  i3318.fixedDeltaTime = i3319[0]
  i3318.maximumDeltaTime = i3319[1]
  i3318.timeScale = i3319[2]
  i3318.maximumParticleTimestep = i3319[3]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3321 = data
  i3320.gravity = new pc.Vec3( i3321[0], i3321[1], i3321[2] )
  i3320.defaultSolverIterations = i3321[3]
  i3320.bounceThreshold = i3321[4]
  i3320.autoSyncTransforms = !!i3321[5]
  i3320.autoSimulation = !!i3321[6]
  var i3323 = i3321[7]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 1) {
    i3322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3323[i + 0]) );
  }
  i3320.collisionMatrix = i3322
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3327 = data
  i3326.enabled = !!i3327[0]
  i3326.layerId = i3327[1]
  i3326.otherLayerId = i3327[2]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3329 = data
  request.r(i3329[0], i3329[1], 0, i3328, 'material')
  i3328.gravity = new pc.Vec2( i3329[2], i3329[3] )
  i3328.positionIterations = i3329[4]
  i3328.velocityIterations = i3329[5]
  i3328.velocityThreshold = i3329[6]
  i3328.maxLinearCorrection = i3329[7]
  i3328.maxAngularCorrection = i3329[8]
  i3328.maxTranslationSpeed = i3329[9]
  i3328.maxRotationSpeed = i3329[10]
  i3328.baumgarteScale = i3329[11]
  i3328.baumgarteTOIScale = i3329[12]
  i3328.timeToSleep = i3329[13]
  i3328.linearSleepTolerance = i3329[14]
  i3328.angularSleepTolerance = i3329[15]
  i3328.defaultContactOffset = i3329[16]
  i3328.autoSimulation = !!i3329[17]
  i3328.queriesHitTriggers = !!i3329[18]
  i3328.queriesStartInColliders = !!i3329[19]
  i3328.callbacksOnDisable = !!i3329[20]
  i3328.reuseCollisionCallbacks = !!i3329[21]
  i3328.autoSyncTransforms = !!i3329[22]
  var i3331 = i3329[23]
  var i3330 = []
  for(var i = 0; i < i3331.length; i += 1) {
    i3330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3331[i + 0]) );
  }
  i3328.collisionMatrix = i3330
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3335 = data
  i3334.enabled = !!i3335[0]
  i3334.layerId = i3335[1]
  i3334.otherLayerId = i3335[2]
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3337 = data
  var i3339 = i3337[0]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3339[i + 0]) );
  }
  i3336.qualityLevels = i3338
  var i3341 = i3337[1]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( i3341[i + 0] );
  }
  i3336.names = i3340
  i3336.shadows = i3337[2]
  i3336.anisotropicFiltering = i3337[3]
  i3336.antiAliasing = i3337[4]
  i3336.lodBias = i3337[5]
  i3336.shadowCascades = i3337[6]
  i3336.shadowDistance = i3337[7]
  i3336.shadowmaskMode = i3337[8]
  i3336.shadowProjection = i3337[9]
  i3336.shadowResolution = i3337[10]
  i3336.softParticles = !!i3337[11]
  i3336.softVegetation = !!i3337[12]
  i3336.activeColorSpace = i3337[13]
  i3336.desiredColorSpace = i3337[14]
  i3336.masterTextureLimit = i3337[15]
  i3336.maxQueuedFrames = i3337[16]
  i3336.particleRaycastBudget = i3337[17]
  i3336.pixelLightCount = i3337[18]
  i3336.realtimeReflectionProbes = !!i3337[19]
  i3336.shadowCascade2Split = i3337[20]
  i3336.shadowCascade4Split = new pc.Vec3( i3337[21], i3337[22], i3337[23] )
  i3336.streamingMipmapsActive = !!i3337[24]
  i3336.vSyncCount = i3337[25]
  i3336.asyncUploadBufferSize = i3337[26]
  i3336.asyncUploadTimeSlice = i3337[27]
  i3336.billboardsFaceCameraPosition = !!i3337[28]
  i3336.shadowNearPlaneOffset = i3337[29]
  i3336.streamingMipmapsMemoryBudget = i3337[30]
  i3336.maximumLODLevel = i3337[31]
  i3336.streamingMipmapsAddAllCameras = !!i3337[32]
  i3336.streamingMipmapsMaxLevelReduction = i3337[33]
  i3336.streamingMipmapsRenderersPerFrame = i3337[34]
  i3336.resolutionScalingFixedDPIFactor = i3337[35]
  i3336.streamingMipmapsMaxFileIORequests = i3337[36]
  i3336.currentQualityLevel = i3337[37]
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3347 = data
  i3346.weight = i3347[0]
  i3346.vertices = i3347[1]
  i3346.normals = i3347[2]
  i3346.tangents = i3347[3]
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3351 = data
  i3350.mode = i3351[0]
  i3350.parameter = i3351[1]
  i3350.threshold = i3351[2]
  return i3350
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"humanBones":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider2D":{"size":0,"direction":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[31],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[38],"93":[38],"94":[38],"95":[38],"96":[38],"97":[38],"98":[38],"99":[38],"100":[38],"101":[38],"102":[38],"103":[38],"104":[38],"105":[31],"106":[23],"107":[108],"109":[108],"33":[26],"20":[3],"110":[3],"111":[3],"25":[3],"112":[31],"113":[26],"114":[23,26],"115":[26,27],"116":[26],"117":[27,26],"118":[23],"119":[27,26],"120":[26],"121":[122],"123":[26],"124":[26],"35":[33],"29":[27,26],"125":[26],"34":[33],"126":[26],"127":[26],"128":[26],"129":[26],"130":[26],"131":[26],"132":[26],"65":[26],"133":[26],"134":[27,26],"135":[26],"136":[26],"66":[26],"63":[26],"36":[27,26],"137":[26],"138":[47],"139":[47],"48":[47],"140":[47],"141":[31],"142":[31],"143":[122],"144":[7],"145":[146],"147":[122]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.BoxCollider2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.MonoBehaviour","DemoBreakable","BreakbleSquare","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DemoJumpPluser","JumpPluser","UnityEngine.EdgeCollider2D","Triangle","UnityEngine.TrailRenderer","particleAttractorLinear","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","rotation","particleAttractorSpherical","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Rigidbody2D","UnityEngine.PhysicsMaterial2D","PlayerTrail","UnityEngine.GameObject","UnityEngine.AudioSource","UnityEngine.AudioClip","DemoPlayerMovement","WallScript","DemoManager","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Fire","ADManager","UnityEngine.Cubemap","MenuManager","BallJump","UnityEngine.CapsuleCollider2D","Coin","x2","p2","JumpSubber","Testere","PlayerMovement","GameManager","SideWallsFollow","UnityEngine.UI.Slider","Settingsmanager","UnityEngine.UI.Mask","UnityEngine.UI.ScrollRect","TrailButtons","BackgroundButtons","BallButtons","PanelSwitch","ShopManager","DG.Tweening.Core.DOTweenSettings","GoogleMobileAds.Editor.GoogleMobileAdsSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","particleAttractorMove","particleAttractorSelf","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.17f1";

Deserializers.productName = "Down The Glass";

Deserializers.lunaInitializationTime = "10/31/2023 09:08:17";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "5.3.0";

Deserializers.lunaSHA = "1f13c8ab746b672a71592a697e719b6f623ec973";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "18518";

Deserializers.projectId = "128c915d8a74aed48a0d57a1ccaee2cc";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.DownTheGlass";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "34efbe77-05ff-4534-9352-958f39cc2f50";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

