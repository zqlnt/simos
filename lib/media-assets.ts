/** All local media under public/images — use encodeURIComponent for filenames. */

export function mediaPath(folder: string, filename: string) {
  return `/images/${folder}/${encodeURIComponent(filename)}`;
}

export const media = {
  sim: {
    pulsePrimary: mediaPath(
      "sim",
      "u2244919984_httpss.mj.runAYEx2hGNEcw_dot_pulse_animation_--ar_a67edebb-8efb-48de-9b49-d594c3fa5e5c_3.mp4",
    ),
    pulseB: mediaPath(
      "sim",
      "u2244919984_httpss.mj.runNxu7izBZ9ns_dot_pulse_animation_with_0efcfaea-61d3-405e-942b-d0174c8d3afa_2_inverted.mp4",
    ),
    pulseC: mediaPath(
      "sim",
      "u2244919984_httpss.mj.runNxu7izBZ9ns_dot_pulse_animation_with_0efcfaea-61d3-405e-942b-d0174c8d3afa_3.mp4",
    ),
    untitled: mediaPath("sim", "Untitled.mp4"),
    phoneGlow: mediaPath(
      "sim",
      "social_u2244919984_full_shot_of_a_smartphone_screen_glowing_with_a_n_6c087323-a30d-4e93-a89d-59669b504578_1.mp4",
    ),
    clipShort: mediaPath("sim", "7c175ae8-02c7-47e4-9256-cea0f7a1431a.MP4"),
    photoStill: mediaPath("sim", "PHOTO-2026-01-26-17-11-31.jpg"),
  },
  simium: {
    loopMain: mediaPath("simium", "AI Video Generator Feb 2 2026 (6) (1).mp4"),
    stepIn3: mediaPath("simium", "Step into Yourself (3).mp4"),
    designJan: mediaPath("simium", "Untitled design - 2026-01-10T103113.757.png"),
    handRemoved: mediaPath(
      "simium",
      "u2244919984_can_you_make_this_same_image_but_without_the_hand_e03e84b6-4d66-42f9-903a-62055891c0c4_3.png",
    ),
    still3: mediaPath("simium", "3 (2).jpg"),
    panelA: mediaPath("simium", "Simulasium UI (5).jpg"),
    panelB: mediaPath("simium", "Simulasium UI (9).png"),
    panelC: mediaPath("simium", "Simulasium UI (10).png"),
    panelD: mediaPath("simium", "Simulasium UI (16).png"),
  },
  simulator: {
    loopMain: mediaPath("simulator", "AI Video Generator Feb 2 2026 (1) (2).mp4"),
    figureWalk: mediaPath(
      "simulator",
      "u2244919984_a_faceless_figure_with_minimal_details_on_his_fac_b02cd1f5-71aa-4c07-93a6-d18c7a1a027e_2.mp4",
    ),
    still2: mediaPath("simulator", "2.jpg"),
    projectLogo: mediaPath("simulator", "Project name and logo (11).jpg"),
    paragraph: mediaPath("simulator", "Your paragraph text (1).jpg"),
  },
  simulatia: {
    loopMain: mediaPath("simulatia", "AI Video Generator Feb 2 2026 (2).mp4"),
    still1: mediaPath("simulatia", "1.jpg"),
    roomPlanner: mediaPath("simulatia", "room-planner-demo.webp"),
    cityA: mediaPath(
      "simulatia",
      "u2244919984_futuristic_3D_city_map_render_one_single_highly_d_ab6e3997-670b-45d2-8d99-c96cbcb3135a_3.png",
    ),
    cityB: mediaPath(
      "simulatia",
      "u2244919984_imagine_prompt_minimal_futuristic_city_map_render_58addce1-45cd-4759-8afa-0e9138be4e36_3.png",
    ),
    cityC: mediaPath(
      "simulatia",
      "u2244919984_imagine_prompt_minimal_futuristic_city_map_render_73a99b92-21e8-4044-807f-f7a536422324_0.png",
    ),
    cityD: mediaPath(
      "simulatia",
      "u2244919984_httpss.mj.runbUBv1DsJvJ8_imagine_prompt_minimal_f_a6a8259d-4f7b-427e-b9ee-4489d5c40468_0.png",
    ),
    cityE: mediaPath(
      "simulatia",
      "u2244919984_httpss.mj.runbUBv1DsJvJ8_imagine_prompt_minimal_f_a6a8259d-4f7b-427e-b9ee-4489d5c40468_3.png",
    ),
    chatStill: mediaPath(
      "simulatia",
      "ChatGPT Image Mar 18, 2026, 07_40_17 PM.png",
    ),
    deskCeo: mediaPath("simulatia", "CEO Desk (2).jpg"),
    deskArtist: mediaPath("simulatia", "Artist Desk (1).jpg"),
    deskComm: mediaPath("simulatia", "Communicator Desk (1).jpg"),
    deskExtra: mediaPath("simulatia", "Extrapolator Desk (1).jpg"),
    groupDesk: mediaPath("simulatia", "Group (1).jpg"),
    researcherPose: mediaPath("simulatia", "Researcher Posed.jpg"),
    researcherPhoto2: mediaPath("simulatia", "Researcher Portrait Photo 2.jpg"),
    researcherSession: mediaPath("simulatia", "Researcher UI.jpg"),
  },
} as const;
