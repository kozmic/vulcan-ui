<!--
Copyright 2021 Adevinta
-->

<template>
  <div>
    <article class="message is-danger" :style="errorStyle()">
      <div class="message-header has-text-centered">
        <p>Session expired</p>
      </div>
      <div id="sessionExpiredBody" class="message-body has-text-centered">
        <br />Your session expired or you don't have permission for this team.
        <a target="_self" :href="addr()">Log in to vulcan</a>
      </div>
    </article>
    <div :style="contentStyle()">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Session"
})
export default class Session extends Vue {
  // Vue properties.
  @Prop({ required: true, default: false })
  show!: boolean;

  @Prop({ required: true, default: "" })
  apiUrl!: string;

  //Private methods.
  private isVisible(): boolean {
    return this.show;
  }

  private errorStyle(): any {
    const display = this.isVisible() ? "" : "none";
    const s: any = { display: display };
    return s;
  }

  private contentStyle(): any {
    const display = !this.show ? "" : "none";
    const s: any = { display: display };
    return s;
  }

  private addr(): string {
    var redirectTo: string = window.location.toString();
    if (this.isDecoded(redirectTo)) {
      redirectTo = encodeURIComponent(window.location.toString());
    }
    return `${this.apiUrl}/login?redirect_to=${redirectTo}`;
  }

  private isDecoded(uri: string): boolean {
    uri = uri || '';
    return uri === decodeURIComponent(uri);
  }
}
</script>
