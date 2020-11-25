import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CategoryPage.css';
import Search from './Search';
import Footer from './Footer';
import CategoryGallery from './CategoryGallery'
import NavBar from './NavBar';


export default function CategoryPage() {
    const location = useLocation();

    const [categoryData, setCategoryData] = useState({});

    useEffect(() => {
      async function getCategory() {
        const fullPath = location.pathname;
        const catId = fullPath.split('/category/').pop();
        const res = await fetch(`/api/category/${catId}`);
        if (res.ok) {
        const data = await res.json();
        setCategoryData(data)
        }
      }
      getCategory();
    }, [location.pathname])

    const categoryNames = {
      "Antiques": "https://lh3.googleusercontent.com/5P1JLDdpHiMRA63vWN62vzH33OOWvrQI1KlQdddwolarnJoNlpVSyoq_LnoGgHGYRtA7uD-QyysY9xLhjuUW2U3onNyQfOUmzKSHaoIBDsZ4AgEtfNj16FKT1BBgFiwjjSUlzvnRod-Fp27Uu7aCceYb4V3gF-3j05F1zXXXvWnJ07Sgk71zw3qdHR96mdcxAxNbcKVyqjPFK_pgM5qlQaWzl3l5IRW06w8tItFHMb5dk_SWhpmiTnYl5JydtKOSNS6KcmA-Ph9-vUEI2-gX-X1WTDq9EFyOwXQd8yZpYgIEZIQb6b8k51motbSc1J-dQEzjDXzwqPwoz-buB50JKfBh8DSvcuqK40tIl0GWuxpWNNHlt0e192LmGNm5EdDhnrx83zxxWZLDLpGzYZAwO9UD8HysnxBm5NhkmzGHKfa6nWcfz8-w2G36h68dLTCJYregnZOHj0uiyOw7xsBnu59yZ6HAhkpbEFChI9fd_acDVHWE2GRgrDeZszOhj4uZfmoM_NTsjrc321ehDNt35QkEzNZw6qqm4oIAdi2LlYfm_iCUEzQ-3IVpwoi0BmpG8zudOfFs6I325vYAUOPunJaqQK-saDwalEy8r7nyUBA_BOKeLXz6vjAfs7eVRc2ewpijaXfap5mkr3KzE1PXG4vV1Kh314DakGuSudDf_bTldpAoGm9v7TLwOiBnaA=w1000-no-tmp.jpg",
      "Comic Books": "https://lh3.googleusercontent.com/pw/ACtC-3cge12xytwE_ydYsLPB1Wv4MsRCxudWPlcLc3HCsV-ZSBfMwjWqe7IuYo6OUmTb0POs4VADGW30WZdOfGjBmv2LLsByKoWrleelJ9CTAHsPtxebbwV0j3r8jV-b9rJpBI9zro5xYbaU5MZm-4RG44TP1QjgDw1R4bvzHKBUslKy-SeqrYwgU-jRM0CDyMcz4T4BUZg5VIGSnxuH-rnlR1QbNbur7S-0t19Ii_ExTkTUWPwV6uscKza2ni1xJZZNeu5rcQe6HjXbu6cBDFcdDcILYLuLMO1spFVXDptzaHwsT8mKXXwcFMAt6WieqVjaM-4m8cmX8pXhRcfH0GlUIR4kf_b8GRZhufbzdnEq441q7BLraJBsOTqEjvy9JcjwlcNpV-RNQbP8XdkDeoZux0jgypkhMp8-Yl83TvSOl_irSDFAMt145meLFPDvnquTexWZAmwbXP8elEUHxR4RImbdoG4Kv_gGIrQ1jxYeY8F1b78ERpP5Kl7IK87FWxpeWBWDc3KEVmJ_T5K4H99oHSko7u2Vu9V9TUA8xkyZkh6U-9og9IQfhJqPgvXA5C2Jm0N6y9a2Y07LfHQyIZgM1og5QLtlBSmDRK0CA7QH5qTse-6WaTXCF4MrkV1zO3BJfnpD7qoWjvbm4aDR3ojX7xBuDkjWfD4716wMfO0kOTfLmaaNQtLb07pAPvDTm-FiXZuxa-DTiihHN72NteZ0=w1000-no-tmp.jpg",
      "Dolls & Toys": "https://lh3.googleusercontent.com/aFeLbi6ZOVYZQWbz5L-JPwB_6tro44s6ScMMls80jmIv4PP0_Pdu89wVGJVJdTgPZd_ppXwvfHj1gYNSwXaaGChmbo3pYrJMU3J-9rpHW4MdL_fSSxWHwH_KAr_8mRrwJHZxDZkX5_lvC2g9-0YBpm4Yp_49M9z4oIUVciH1hzn7LLG7cy7fV7JM8ZzpRPeCWuJMK57PMknBfLOict9LcL2GrtiXvLOWPGk2sIQsITvgcz5flg_Pob1LW0S62uC-Y5plf9V8k0Y6rJ7PELnYkjbKvn-ziVL6lLTaZ6OIxX2y4lh1PWucwTwAqalSF3gAEE8TlxRzIpAJqggxj_BQWHX7UTiK_MMEsOfbL-l4ibr_Y95tc7tAfKqpOWJ0oC2g_gyKRXcNKHm6uAJ9LLQArApAl9bfJucfwJIKsVsM1GgeUC_oIMfM98HcrXsg2PeeAD6NW2S5KK7eNbc5u5ZmI1mFxO5zezjMD3BGH6zLACCVUAn_Ks_jk5AN1lRUktwjZgONiBaGh0eIiXp90I8eTlZe2RZEw057YA-CvXZFiEs1KOKKvajMKjkAHOKRazvbm1xNW3pQF678qDdpqNLWtQA214s8lDnbOyoHU4YMIQ52bU_Rw0ALIcGHCdDlGVnefwjlhHnZSjyTM_1F3O8uqhYi1-AA_vZtQTyhWkDe5wES8JZ3OKCLVF9Ok2MHUA=w1000-no-tmp.jpg",
      "Sports Memorabilia": "https://lh3.googleusercontent.com/Ez-8bVRMJhmtJ7a748Y2Wp4J4PWfXFMJuGkuYnTW5L9DGtud8sicdV8FzlMweZJDP9ov4Lp_dK6S5Mwis9E1DlmXcJaGGPxu7MbsVUJIwa643WfwBPGNpXpdqfaRG_gyrBE3Ll3EGUSYWZlXOaUVYCmhXkV0Ngywst4LcQIWEEQcDWKwp9isPgHMoOSXanSRBNYxPkX1hxj1VASsw7De2iM9WrzNGF9vyQecpNn80g_pbeafaLknog993KM_gOyC4kUd3-B0hNqYEP9tR3z6q_oxxG2ub1YqGmtTeFcBo3MZNqgMAo9wuEfEM6F2Z4NO4mTfAKqEpGLcEkUTlFmcNOHDgFn6BOlSYBx8eHRaLn7M8FRc7oUSJCeqPqPTvB2lhKJ-DnBUWnAJ7s83LrkZxx-bpuOjiNCDStHWydl3rmL-YYekdxcq4AcZ2NyOCC7heFhWWL8FB3Sizmf3wXsYuwVUxLsCgII0V2tGweyeQRojAoYVBHDKqEoGMdqr2oUM4BCJVWE_XftYAJ6rTonRee909-eaJRe7AlebQmhxDU5yxhJXyyB1qg4rya9L4r6vAHZxCfRCBCPSpAjoEky_-hzpdE5NdKIAW8jsy63ZZutFFJJdw_6SRYkbblo36_ju60QBRCsIDfRKinSxWDuGuuiNA1fJhepuMVUsccgdV1eDDkegf7S_Md3PBSLr3g=w1000-no-tmp.jpg",
      "Star Wars": "https://lh3.googleusercontent.com/pw/ACtC-3do7fKDdsKb1aM9Xr5PWT_7jFht5E78D719udMIiTSp_beh2TzpmZrH0fQLgCHfRK5XUTy-wGSbplo4VoyP9NtW9uuv8xJEDnYyG34cE08z4XNlA6YodpyUo0whCGw-gie6HDAbGEzu-60hZ4JhxoEXcA2BvF1LtYbyAmvjisI1iA0QBS9PTxXixMPafnbomX6bWrc9XyD7aAA2reXI65mhLd_b_vMU0iP1BU1nX4H9eXQEGapwruxig47G7Y_nHovIFaxbm03QbuMvsVQyaMZ-c3ee_43TOnhIGW0ST9bRNvTIURPr1oC9VsGHzZLJYKpLxvkrjcomlUk7Ucq_d-9d7LAeQjNV8qbPUkZZDcSYIbi1_Fr4D1MKR3rvgoQPdnhbNTCZdChhBVr75oeQ0EUJOhvq4glVwoZ0bevq-zA5VaphS17bhrlTOipB5FFzec6QwKj4fbuorEtc1sFJFHVV3jIeOJyDbsnq02XQIvPlxYDC2SFxkV0NngFxjcIXglIULeUWkQoD0vERRjX0HF9KXN8BGHWnSwZjscrTXKe44V4HMVToNaw2MZwjwhxleETJKyLZhUw9FSyb6YJ9TFsZVcLJxQ0Iaky2O8ABXjd5Zm8KTDrmO5nqvhtlOSgKUZpCane3bUw98jdzN4QAyFWVsUiXXGjYjGR9Ggqn3c1F0IN8W-4XeB_-Iz1Eo35rijHe9fwMuI6ZQmDkeQnh=w1000-no-tmp.jpg",
      "Trading Cards": "https://lh3.googleusercontent.com/pw/ACtC-3fKZA0WbXqlUvry2fipg5NRqIaBkDpXwgWUFn_Y9RYTnFkuOzZ5sZJey3dxxaKmAc1Bvqlzho1gWC2YMw0urYTW17x41g9m5hZNTTtKHledTMCyvdS-842PM8Md3hBWYUUPqT3MUwm8Ii3cu2CKlORPn9a9MCMCp0IZ7JVAmNH4RowNAtBWAxVLY_PngR76N6xa06YvF4HVLZndZDaXRGg7voTpooMUP-YT49YMRSV-7VlqeJUp35ZAzk1sMkKK-NRgm6VUvgQoTU47VfSZUZ2l-cPaKeBJsWaRcpZ8JhHpylAdeap6dQ7s3CDt6mL_duG1HRQqH_0XPam8lN0AAyQZOgHWr3fOs7BRrVe6UDLOvwLdCTfvawaclyO-Mgf6R6uuWO4fc5bmi8fkxj7vBq-a-gGkiTlaFTfVIOAdW55xwkCnNcdilBPfcRGFeYcl0nEmNcNW012kxzpvVRCz0LpBNB8NMvAS2diJz-GLZD6iT848axhmnQ1Ixn6Q6OqbUdD7Mwrf3Wk7Ar2Ndd60MStbqclX5WF3jq88K3S_T2Mj27-jsm6T461WSRCqVuIUwvUdQ5CCfrd3l1I2BmqH5DC-7bTzIGAeHWsMEHPw2ssl6L1zMheX584MPtPfJaJR55_KeYG7LGw7jw_f6qm2ziLPlNISIZwUZFcwFUmcXdP_7k25bcam3Oiq60OXMj5umwHBacpWZIUm-maPegk1=w1000-no-tmp.jpg",
      "Video Games": "https://lh3.googleusercontent.com/hsWLMOHhVcD_zZOyAr3UE-u9eqS0cwzuZ9SivcFJojMvn6Wiy_yUVRYxv3dY9nESDuWtzFscJsT0aZ6B-Kz5F2_NK1-7sKgpChOJc0exOTa1hmq7C992s0aT0QbsshMbBQb9xHjSQ5b0C0wX6k7hquibnL82mnZC1fjHs2UKxSxCBi92vQr9V4c8uYmyiNiGCbqYqDUsg7rYWjdPX7ZZ0zhxVbWPuRA1XQDPwucV2-iILridCJHqbuTndtTjfMYXujHXflckNyVWHED_I6ubbkatcvkhXdgFg2Rd71SqKCXVdYZst4sAgQ4WFVT2TkECNCIuZ3AnIOVqDEaRcqDz2up9t8ioSeongYOdTbzKABMekFogfm-zq7934ktt6PaNCBuOTATAwmE19VHzLm1IEe78CC8DGe6brSucgVYLjOzv02LWaB490WyzFHDRqLCnzSAJNqYtPHTm1U4yQjd_FBaWXd5s_0vyd7UF1Qy8V6WacHwMR_WSXJkJpwc9lOgj10Q-gLNDbziwH904cJ4wp2enFEbz5xEd9LLsJ3VhF5f9uZTR5Ug40mxqaw_LWOS7KM9cyIrevv0Rpuo1qykDGYLm6xRWGoLbPeZ_6lBGWcNO9QWezOmOBH_nU46utoFWL7nwaVlZhz2vMLKbNx7vUC8KuoOhdLLzcENmTY8TuPQmKGyz3NRPVzGscIzRKA=w1000-no-tmp.jpg",
      "Vinyl Records": "https://lh3.googleusercontent.com/2quGbZjfLVq8Mqr7_ob5kd7UwMeKstujIqddDKKmlMRSdVZUKM1NRy5n4zfPHPnMjQYCaX21tOC-WOSrfSRyPeNx2vDROPeZUCaDsqLwztDGCLn0l4o4JqAi9A2Bdyf5g9ifNm3SqSko1FFTSGG4R9KtV-2IOXKoHq_K5ZvWuT0iH-TltPsHMwxmXtJybXJDygQCh90SvbVieGtsiwqGSlAGxMY2IkMbz5kGaGjeZOsax5T7zeVCGAiOuEjR0IKAJnlcsE0CO7n9eVDN525t4CcZ69t4vpoFHdM1Xi6iNTgK7c5r2qjuclD1QaQn3eDqt-v0b3R6aYtAEUznZlzU7txmQYl-mR6yyBaE0hecVTKbETwK_qkZwW3B8iSVcEIUtvqjeFA8FWTYFrDX8DTJ0DsPx2Llgw8PCLsJ1ZqewGXHqN35Dy4Pmy07L9D-yxGa8iQwN9mYvxACtjxVo7vee7T4q3204TmE_D7P9zQ6_3Xe5WEWZSQNWFFyfv2MLp_HhErN-UwEXy7uoUSakt-uG_ozE8f6WoTDUQ5Hkuz4iidJ5j5gMpMtnDQQ-JvbNSUJ8HaqgcYym0sO60EN73yPBQ70TBKXnolal4m0E1xNaTMvRx0fln5q1wNg3Scpmw0I-K9wzT_OYBOAYzRcV7uniALWdO4Ts9acUKIw3wo13IY_705oLb_vwIVjIjrTiQ=w1000-no-tmp.jpg"
    }

    const loadBanner = () => {
      if (!categoryData) {
        return null;
      } else {
        const categoryName = categoryData.category;
        if (categoryName in categoryNames) {
          return categoryNames[categoryName]
        }
      }
    }

    return (
      (!categoryData) ? null :
        <>
          <div id="category-master-container">
            <div id="header-nav-bar">
                {NavBar()}
            </div>
            <div id="category-type-header">
                <img id="category-img" className="images" width="100%" src={loadBanner()} object-fit="cover" alt=""/>
                {/* <img id="category-img" className="images" width="100%" src={require("../images/comic-header.png")} object-fit="contain" alt=""/> */}
                <div id="category-img-layer"></div>
                <div id="category-header">{categoryData.category}</div>
            </div>
            <div id="category-search-container">
              <div>{Search()}</div>
            </div>
            <div>{CategoryGallery()}</div>
            <div id="category-footer">{Footer()}</div>
          </div>
        </>
    )
}
