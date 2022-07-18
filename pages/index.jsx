import Head from "next/head";

import styles from "@/pages/index.module.css";
import { faker } from "@faker-js/faker";
import { useForm } from "react-hook-form";

export default function Home() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div>
                        <label htmlFor="state">State</label>
                        <input
                            data-testid="state"
                            {...register("state", {
                                required: "this field is required",
                                pattern: {
                                    value: /^[a-zA-Z ]*$/,
                                    message: "only text is acceptable",
                                },
                                maxLength: {
                                    value: 14,
                                    message:
                                        "your state must be in 14 charekter long",
                                },
                            })}
                            type="text"
                            name="state"
                            placeholder="State"
                        />
                        <span style={{ color: "red" }} data-testid="stateError">
                            {errors.state?.message}
                        </span>
                    </div>
                    <div>
                        <label htmlFor="county">county</label>
                        <input
                            data-testid="county"
                            {...register("county", {
                                required: "this field is required",
                                pattern: {
                                    value: /^[a-zA-Z ]*$/,
                                    message: "only text is acceptable",
                                },
                            })}
                            type="text"
                            name="county"
                            placeholder="county"
                        />
                        <span
                            style={{ color: "red" }}
                            data-testid="countyError"
                        >
                            {errors.county?.message}
                        </span>
                    </div>
                    <button data-testid="submitBtn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
